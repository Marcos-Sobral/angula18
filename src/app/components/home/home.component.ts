import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';
import { HelloWorldService } from '../../services/hello-world.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = signal('Sobraldev');
  catUrl = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';
  num = signal(0);
  count = 0;
  value = false;
  lista = ['Marcos','Débora','Carlo', 'Guilherme', 'Gusta', 'Lorran', "CarLucas", 'Léo'];


  constructor(private service: HelloWorldService){
    this.service.getHelloWorld().subscribe(
      // versao nova
      {
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete:() => {
          console.log('finalizou');
        }
      }

      //versao abaixo do 17
      /*(data) => {
        console.log(data)
      },
      (error) => {
        console.error('Erro ao obter fatos sobre os gatos:', error);
      } versão antiga tinha verificação de erro*/
    );
  }

  alertButton() {
    alert('Oi');
  }

  somaButton(){
    this.num.update(num => num + 1);
    //this.count += 1;
    //console.log(this.count);
    this.name.set('Sys OS V.' + this.num()); 
  }
}
