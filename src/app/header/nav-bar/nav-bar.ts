import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface INavigationItem {
  iconName: string;
  label: string;
  link: string;
  mobile?: boolean;
}

@Component({
  selector: 'app-nav-bar',
  imports: [NgClass],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
  standalone: true,
})
export class NavBar {
  public readonly navItems: INavigationItem[] = [
    {
      iconName: 'link',
      label: 'Ссылки',
      link: '#',
    },
    {
      iconName: 'contacts',
      label: 'Контакты',
      link: '#',
    },
    {
      iconName: 'tag',
      label: 'Теги',
      link: '#',
    },
    {
      iconName: 'favorites',
      label: 'Избранное',
      link: '#',
    },
    {
      iconName: 'history',
      label: 'Посещения',
      link: '#',
      mobile: true,
    },
  ];
}
