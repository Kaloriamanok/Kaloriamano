# Kalóriamanó

Üdv a kalóriamanó alfa verziójában

Elmesélem, hogyan tudod futtatni a gépeden a projektet

### Szükséged lesz a következőkre:

- [Node.js](https://nodejs.org/en), magában tartalmazza az npm-et. javaslom, hogy ha van is a gépeden node, frissítsd a dolgaid, nehogy konfliktus legyen. (nem akarok yarnnal pnpmmel vagy bunnal szórakozni csapat miatt ha érdekel)
- [Git bash](https://git-scm.com/downloads) **(ha még nem lenne)**, githubos tevékenységek során hasznos, visual studio codeba beépíthető, hogy cloneozni tudd a repot, és ne zipekben kelljen letöltened a dolgokat
- _(Opcionális)_ [Visual Studio Code](https://code.visualstudio.com/), vagy személyes kedvenc IDE, pluginok sokat segítenek majd a projekt fejlesztése folyamán (ne notepad)

### Repo elhelyezése saját gépen

1. Készíts elő egy üres mappát a gépeden, ahova klónozod majd a projektet
2. Nyiss meg egy basht a mappán belül, és klónozd le a projektet

```bash
git clone https://github.com/Kaloriamanok/Kaloriamano.git ./
# a ./ a jelenlegi mappába klónozza
```

3. A klónozott mappában telepítsd a dependencyket a következőképp

```bash
npm install
```

4. Futtasd a fejlesztői környezetet a következőképp

```bash
npm run dev
```

_Jó hekkelést!_
