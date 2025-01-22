import { Component } from '@angular/core';

@Component({
  selector: 'app-material-ui-demo',
  templateUrl: './material-ui-demo.component.html',
  styleUrls: ['./material-ui-demo.component.css'],
  standalone: false,
})
export class MaterialUiDemoComponent {
  cardTitle = 'Material UI Card';
  cardContent = 'This is a simple Material UI card with an input field and a button.';
  inputText = '';

  submitInput() {
    alert('You entered: ' + this.inputText);
  }
}
