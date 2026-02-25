import { CommonModule } from '@angular/common';
import { Component, ContentChild, contentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() isOpen: boolean = false;
  @Input() data: any;

  @Output() closeModal = new EventEmitter<void>();  
  num= {
    key: 'numeric',
    value: 5
  }

  @ContentChild('modalBody') bodyTemplate!: TemplateRef<any>;
  @ContentChild('modalFooter') footerTemplate!: TemplateRef<any>;

  close() {
    this.closeModal.emit();
  }

}
