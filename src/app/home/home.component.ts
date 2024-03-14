import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listaProdutos = [
    {
      imagem: 'assets/produto.png',
      descricao: 'Banana'
    },
    {
      imagem: 'assets/produto.png',
      descricao: 'Maça'
    },
    {
      imagem: 'assets/produto.png',
      descricao: 'Pera'
    },
    {
      imagem: 'assets/produto.png',
      descricao: 'Uva'
    }
  ];
}
