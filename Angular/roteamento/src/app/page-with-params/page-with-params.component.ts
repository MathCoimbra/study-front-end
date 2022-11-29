import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancellationCode } from '@angular/router';

@Component({
  selector: 'app-page-with-params',
  templateUrl: './page-with-params.component.html',
  styleUrls: ['./page-with-params.component.css']
})
export class PageWithParamsComponent implements OnInit {

  id: number | null = null;
  idade: number | null = null;
  nome: string | null = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    });

    this.route.queryParamMap.subscribe(params => {
      this.idade = Number(params.get("idade"));
      this.nome = params.get("nome");
    });
  }

}
