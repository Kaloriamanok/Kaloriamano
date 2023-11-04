### Hogyan menjen a fejlesztés menete

Fontos, hogy megbeszélt rendszer szerint dolgozzunk, hogy ne álljunk egymás útjában a munka során, és mindenki képben legyen a program aktuális helyzetével.

Vázolom hogy hogy kellene ezt.

1. Ha valamin el szeretnél kezdeni dolgozni, azt a jira táblából válaszd ki, tedd a folyamatban listába, és add hozzá magadhoz a feladatot. Ha van valami olyan, ami szerinted szükséges lenne a programhoz, akkor azt ne kezd el bejelentetlenül csinálni, hanem add hozzá a folyamatok listához, majd a következő sprintben dolgozni fogunk rajta.

2. Mindig. mikor elkezdesz dolgozni kezdd a munkád egy git pullal, hogy tudj alkalmazkodni az aktuális program állásához.

```bash
    git pull
```

3. Amikor egy új featuren elkezdesz dolgozni, akkor azt egy külön ágon kezdd el, ne a main ágon írd a kódod egyenesen (benne van a pakliban, hogy valami nem tetszik a kódnak, könnyebb visszamenni a main branchre mint a commitjaidat törölgetni)

```bash
    git branch <featurenév>
    git checkout <featurenév>
```

ezzel az új ágra léptél

4. ha valamilyen fájlt létrehozol, írsz, módositasz, azt commitolni kell, addig figyelmen kívül fogja hagyni a github (ezért nem tudtunk mergelni is ha emlékeztek)

```bash
    git add <fájlnév>
    # vagy git add -A hogyha minden változást egy commitba akartok rakni (nem ajánlott de előfordul)
    git commit -m "leíró üzenet, hogy mi is történt ebben a commitban"
```

- commit gyakran, hogyha valami hiba van akkor könnyű legyen kezelni azt
- a commit üzenet írja le a dolgot amit csinál, ne egy szavas legyen

5. **(!!!)** Ha befejeztük a kódot, és leteszteltük, hogy a prorgamban nem okozott bugot (kattingassunk körül az oldalon, nézzük meg minden működik e), akkor váltsunk vissza a main ágra, és egyesítsük a két kódot.

```bash
    git checkout main
    git merge <featurenév>
```

ha minden jól ment, akkor a main ágon láthatjuk a megírt kódunkat.
commitoljuk a mergelésünket (4.es pont)

6. Ha commit kész, akkor pusholjuk fel a main águnkat githubra, és készen is vagyunk.

```bash
    git push
```

7. Jirán ne felejtsük el befejezettként megjelölni a feladatot.

Soknak tűnhet, kérdezhetitek miért kell mindez, de tavaly is majorosnál voltam, és csak amiatt adta meg az ötöst mert szépen vezettem neki a commitokat, mindent új ágon próbáltam ki, és higgyétek el megnézi.
