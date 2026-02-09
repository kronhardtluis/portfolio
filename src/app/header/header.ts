import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
      const deRef: HTMLElement = document.getElementById('de')!;
      const enRef: HTMLElement = document.getElementById('en')!;

      if (!document.getElementById(language)!.classList.contains('chosen')) {
    deRef.classList.toggle('chosen');
    enRef.classList.toggle('chosen');
      }
  }
}
