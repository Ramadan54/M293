# M293 Fussballblog-Doku

## Einleitung

Im Folgenden gehe ich darauf ein wie ich KI (Spezifisch ChatGPT) zu meinem Vorteil bei der Erstellung des Webauftritts verwendet habe. Dabei habe ich es in unterschiedlichsten Feldern verwendet, um die Arbeit zu erleichtern, aber nicht komplett zu übernehmen. Ebenso erläutere ich meine genutzten Produkte und gehe noch nachträglich auf gewisse Features ein.

### Text-Erstellung

Da mein grösserer Fokus darin lag, meine Website schön zu gestalten, sowie von den Funktionen korrekt hinzukriegen, habe ich für die Erstellung der Texte ChatGPT verwendet. Da es in meinem Blog um Fussball ging, habe ich diverse Themen die mich selbst interessieren herausgesucht und diese dann als Prompt an ChatGPT übergeben. Dabei sah ein Prompt wie folgt aus:

```bash
Kannst du mir 10 Blog-Einträge zu diesen Themen erstellen
```

### HTML-CSS

Auch wenn ich bereits ein fundiertes Wissen über HTML-CSS habe, gab es trotzdem einige Stellen an denen ich Schwierigkeiten hatte. Dafür habe ich ebenfalls KI verwendet, um diese umzusetzen. Die grössten Schwierigkeiten gab es dann bei der Positionierung von meinen Elementen und der korrekten Verwendung von CSS.
Zum lösen von Problemen, wenn z.B. etwas sich nicht so verhalten hat, wie ich es mir vorgestellt habe, habe ich meinen CSS code genommen und diesen an ChatGPT geschickt. Mein Folgender Prompt sah ungefähr so aus.

```bash
Hey, ich habe einige Schwierigkeiten mit meinem Code 'CODE'
Ich versuche dieses Element XY zu postionieren, aber dies funktioniert nicht ganz, hast du einen Lösungsansatz?
```

### Javascript

Da ich nicht wirklich viel mit Javascript gearbeitet habe, aber dennoch eine gewisse Grundstruktur habe, habe ich mir trotzdem als Ziel gesetzt, JS in meinem Code einzubauen. Ich habe einen Code entwickelt und wenn dieser nach mehreren Versuchen nicht geklappt hat und ich keinen Erfolg auf z.B. Stackoverflow finden konnte, habe ich es dann mit der KI versucht. Ein Prompt sah dabei so aus.

```bash
Hey, ich würde gerne mit diesem JS-Code 'CODE' versuchen, diese XY Funktion zu erreichen, aber irgendwie passiert dieses unerwartete Verhalten, kannst du mir weiterhelfen?
```

### Genutzte Produkte

Als meine Entwicklungsumgebung, habe ich Visual Studio Code verwendet. Da dieser ein Live-Server anbietet, war das für mich die bevorzugte IDE, da ich so meine Website ausgiebig testen konnte.
Um Hilfe mit meinem Code zu erhalten, habe ich Stackoverflow bei Lösungsversuchungen verwendet, wenn diese gescheitert sind, bin ich auf ChatGPT zurückgefallen.

### Features

Ich habe diverse Features eingebaut in meinem Code, darunter die Verwendung von JS. Mir war es wichtig redundanten code zu vermeiden, daher habe ich die navigation bar und den footer seperat in einer HTML aufgebaut und mit JS dafür gesorgt, dass diese auf jeder Page mit der Verwendung von z.B. <Footer/> angezeigt werden.
Ebenso habe ich eine Like-Funktion eingebaut, welche im Local-Storage eingebaut wird. Leider ist diese nicht Global erreichbar, im Sinne von dass die likes von jedem eingesehen werden, aber die Funktion dient auch eher wie ein persönliches "Ich mag diesen Artikel und würde gerne in Zukunft darauf zurückkommen."

### Reflektion

Allem in allem bin ich sehr zufrieden mit dem Abschluss meines Projektes. Leider habe ich das etwas übersehen mit der Dokumentation, deshalb muss ich diese nachreichen. Die Verwendung von KI hat mir definitiv die Arbeit an meinem Blog erleichtert, zumal ich mir die Zeit gespart habe, zehn Artikel selbst zu erstellen, sondern diese lediglich mit KI generieren konnte. Auch bei Problemen konnte ich KI verwenden, um meinen code zu fixxen und zu garantieren, dass es nach meinen Vorstellungen funktioniert.
