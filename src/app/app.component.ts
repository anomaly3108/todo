import { Component, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  todoArray: string[] = [];

  public form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.constructForm();
  }

  constructForm() {
    this.form = this.fb.group({
      todo: this.fb.control(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.invalid) { return; }
    this.todoArray.push(this.form.get('todo').value);
    this.form.reset();
    console.log(this.todoArray)
  }

  onDeleteItem(index) {
    this.todoArray.splice(index, 1);
  }


}
