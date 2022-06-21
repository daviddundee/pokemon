import { Component, OnInit } from '@angular/core';

@Component({
    selector: '404',
    template:
        `
        <h1>page non trouvé<h1>
        <a routeurLink="/pokemon/all">retour<a>
        `
})

export class PageNoFound implements OnInit {
    ngOnInit() {
    }
}