# Elektro J&P - Strona Firmy Elektrycznej

Responsywna strona internetowa dla firmy oferującej usługi elektryczne. Strona zawiera nowoczesny design z efektami animacji i jest w pełni kompatybilna z urządzeniami mobilnymi.

## Funkcjonalności

- Responsywny design dostosowujący się do wszystkich rozmiarów ekranów
- Animowane elementy interfejsu
- Formularz kontaktowy
- Interaktywna mapa Google
- Efekt cząstek w tle
- Menu mobilne dla urządzeń o mniejszych ekranach
- Przycisk szybkiego przewijania do góry strony
- Struktura oparta na sekcjach: Hero, Usługi, O Nas, Kontakt

## Struktura Projektu

```
elektro-jp/
├── index.html          # Główny plik HTML
├── css/
│   └── styles.css      # Style CSS
├── js/
│   └── scripts.js      # Skrypty JavaScript
├── images/             # Katalog na obrazy
│   ├── elektryk-praca.jpg
│   └── elektro-jp-team.jpg
└── README.md           # Dokumentacja projektu
```

## Technologie

- HTML5
- CSS3 (z wykorzystaniem zmiennych CSS, animacji, flexbox, grid)
- JavaScript (animacje, efekty przewijania, menu mobilne)
- Font Awesome (ikony)
- Google Fonts (Montserrat, Roboto)
- Responsywny design

## Instalacja i Uruchomienie

1. Sklonuj repozytorium:
   ```
   git clone https://github.com/username/elektro-jp.git
   ```

2. Otwórz plik `index.html` w przeglądarce lub użyj lokalnego serwera.

## Dostosowywanie

### Zmiana Kolorów

Kolory można łatwo zmienić, modyfikując zmienne CSS na początku pliku `styles.css`:

```css
:root {
    --gold: #ffc800;
    --gold-light: rgba(255, 200, 0, 0.15);
    --gold-hover: #e6b800;
    --dark-blue: #0a1029;
    --darker-blue: #060a19;
    --darkest-blue: #030612;
    /* pozostałe zmienne */
}
```

### Dodawanie Nowych Sekcji

Aby dodać nową sekcję, postępuj według tego wzorca:

```html
<section class="nazwa-sekcji" id="nazwa-sekcji">
    <div class="container">
        <div class="section-header">
            <span class="section-subtitle-above">Podtytuł</span>
            <h2 class="section-title">Tytuł Sekcji</h2>
            <p class="section-subtitle">Opis sekcji...</p>
        </div>
        
        <!-- Zawartość sekcji -->
        
    </div>
</section>
```

## Kontakt

Elektro J&P
- Adres: Dębno 149, 37-305 Dębno
- Telefon: +48 730 706 965
- Email: szklannypatrycja@gmail.com

## Licencja

Ten projekt jest dostępny jako open source na licencji MIT.

## Zrzuty Ekranu

Dodaj zrzuty ekranu projektu po wdrożeniu.
