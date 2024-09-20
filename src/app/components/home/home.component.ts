import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = signal('Sobraldev');
  catUrl = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';
  num = signal(0);

  alertButton() {
    alert('Oi');
  }

  somaButton(){
    this.num.update(num => num + 1);
    this.name.set('Oi ' + this.num()); 
  }
}
