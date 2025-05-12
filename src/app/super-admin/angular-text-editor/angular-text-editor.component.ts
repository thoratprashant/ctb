import {
  Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { TextSelection } from 'prosemirror-state';

@Component({
  selector: 'app-angular-text-editor',
  templateUrl: './angular-text-editor.component.html',
  styleUrls: ['./angular-text-editor.component.scss'],
})
export class AngularTextEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('editorWrapper') editorWrapper!: ElementRef;

  editor = new Editor();
  toolbar: Toolbar = [['bold', 'italic'], ['code']];
  form = new FormGroup({
    content: new FormControl('', Validators.required)
  });

  showSuggestions = false;
  suggestions: string[] = [];
  selectedIndex = 0;
  suggestionPos = { x: 0, y: 0 };

  cssProperties = ['color','background','border', 'background-color', 'display', 'margin', 'padding']; 
  cssValues = {
    'background-color': ['red', 'blue', 'green', '#ffffff', 'rgb(0,0,0)'],
    'background': ['red','green'],
    'border': ['solid', 'thik'],
    'color': ['red', 'blue', 'black'],
    'display': ['block', 'inline', 'flex'],
    // Add more properties as needed
  };

  currentProperty: string | null = null;
  isPropertySelected = false;

  ngOnInit(): void {}

  onKeyUp(event: KeyboardEvent): void {
    if (['ArrowUp', 'ArrowDown', 'Enter', 'Tab', 'Escape'].includes(event.key)) return;

    const view = this.editor.view;
    const { state } = view;
    const { from } = state.selection;
    const $from = state.doc.resolve(from);
    const lineStart = $from.start();
    const textBefore = state.doc.textBetween(lineStart, from, ' ');

    // Detect colon usage (e.g., background: re)
    const colonIndex = textBefore.lastIndexOf(':');
    if (colonIndex !== -1) {
      const propPart = textBefore.substring(0, colonIndex).trim().split(/\s+/).pop();
      const valuePart = textBefore.substring(colonIndex + 1).trim();

      if (propPart && this.cssValues[propPart]) {
        this.currentProperty = propPart;
        this.suggestions = this.cssValues[propPart].filter(val =>
          val.toLowerCase().includes(valuePart.toLowerCase())
        );
        this.showSuggestions = this.suggestions.length > 0;
        this.selectedIndex = 0;
        this.setSuggestionPosition();
        return;
      }
    }

    // Default to suggesting properties
    const lastWord = textBefore.split(/\s+/).pop() || '';
    this.currentProperty = null;
    this.suggestions = this.cssProperties.filter(p =>
      p.toLowerCase().startsWith(lastWord.toLowerCase())
    );
    this.showSuggestions = this.suggestions.length > 0;
    this.selectedIndex = 0;
    this.setSuggestionPosition();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (!this.showSuggestions || document.activeElement !== this.editor.view.dom) {
      return;
    }

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        event.stopPropagation();
        this.selectedIndex = Math.max(0, this.selectedIndex - 1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        event.stopPropagation();
        this.selectedIndex = Math.min(this.suggestions.length - 1, this.selectedIndex + 1);
        break;
      case 'Enter':
      case 'Tab':
        event.preventDefault();
        event.stopPropagation();
        if (this.suggestions[this.selectedIndex]) {
          this.selectSuggestion(this.suggestions[this.selectedIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        event.stopPropagation();
        this.showSuggestions = false;
        break;
      default:
        return;
    }
  }

  insertSuggestion(suggestion: string): void {
    const view = this.editor.view;
    const { state } = view;
    const { from } = state.selection;

    const $from = state.doc.resolve(from);
    const lineStart = $from.start();
    const textBeforeCursor = state.doc.textBetween(lineStart, from, ' ');

    let tr = state.tr;

    if (this.isPropertySelected) {
      const lastColonPos = textBeforeCursor.lastIndexOf(':');
      const replaceFrom = lastColonPos === -1 ? from : lineStart + lastColonPos + 1;
      tr.insertText(suggestion, replaceFrom, from);
      tr.setSelection(TextSelection.create(tr.doc, replaceFrom + suggestion.length));
      this.isPropertySelected = false;
    } else {
      const lastSpacePos = textBeforeCursor.lastIndexOf(' ');
      const replaceFrom = lastSpacePos === -1 ? lineStart : lineStart + lastSpacePos + 1;
      tr.insertText(suggestion + ': ', replaceFrom, from);
      tr.setSelection(TextSelection.create(tr.doc, replaceFrom + suggestion.length + 2));
      this.isPropertySelected = true;
    }

    view.dispatch(tr);
    this.showSuggestions = false;

    // ✅ Trigger value suggestion immediately after property is inserted
    setTimeout(() => {
      const syntheticEvent = new KeyboardEvent('keyup', { key: ' ' });
      this.onKeyUp(syntheticEvent);
    }, 0);
  }

  selectSuggestion(suggestion: string): void {
    const view = this.editor.view;
    const { state } = view;
    const { from } = state.selection;
    const $from = state.doc.resolve(from);
    const lineStart = $from.start();
    const textBefore = state.doc.textBetween(lineStart, from, ' ');

    let replaceFrom = from;
    let textToInsert = suggestion;

    if (this.currentProperty) {
      const needsSemicolon = !suggestion.trim().endsWith(';');
      textToInsert = needsSemicolon ? suggestion + ';' : suggestion;

      if (needsSemicolon) {
        textToInsert += ' ';
      }
    } else {
      const lastSpace = textBefore.lastIndexOf(' ');
      replaceFrom = lastSpace > -1 ? lineStart + lastSpace + 1 : lineStart;
      textToInsert = suggestion + ': ';
    }

    const tr = state.tr.insertText(textToInsert, replaceFrom, from);
    view.dispatch(tr);
    this.showSuggestions = false;
    this.selectedIndex = 0;

    // Re-run keyup if this was a property insert
    if (!this.currentProperty) {
      setTimeout(() => {
        const syntheticEvent = new KeyboardEvent('keyup', { key: ' ' });
        this.onKeyUp(syntheticEvent);
      }, 0);
    }
  }

  setSuggestionPosition(): void {
    const sel = window.getSelection();
    if (!sel?.rangeCount) return;

    const range = sel.getRangeAt(0).cloneRange();
    const rect = range.getBoundingClientRect();
    const wrapperRect = this.editorWrapper.nativeElement.getBoundingClientRect();

    this.suggestionPos = {
      x: rect.left - wrapperRect.left,
      y: rect.bottom - wrapperRect.top,
    };
  }

  ngAfterViewInit(): void {
    const editorDOM = this.editor.view.dom;
    editorDOM.addEventListener('keydown', this.onKeyDown.bind(this), true);
    editorDOM.addEventListener('keyup', this.onKeyUp.bind(this), true);
  }

  ngOnDestroy(): void {
    const editorDOM = this.editor.view.dom;
    editorDOM.removeEventListener('keydown', this.onKeyDown.bind(this));
    editorDOM.removeEventListener('keyup', this.onKeyUp.bind(this));
    this.editor.destroy();
  }
}
