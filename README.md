# Függvénytesztelős komponens készítése React-ben

_Kliensoldali webprogramozás 1. beadandó 2022-23-2_

## Nyilatkozat

Kérlek, töltsétek ki az adataitokkal beadás előtt!

```txt
<Hallgató neve>
<Neptun kódja>
Kliensoldali webprogramozás - beadandó
Ezt a megoldást a fent írt hallgató küldte be és készítette a Kliensoldali webprogramozás kurzus számonkéréséhez.
Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy használtam harmadik féltől
származó megoldásokat. Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé.
Az Eötvös Loránd Tudományegyetem Hallgatói Követelményrendszere
(ELTE szervezeti és működési szabályzata, II. Kötet, 74/C. §) kimondja, hogy mindaddig,
amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak jelentős részét -
saját munkájaként mutatja be, az fegyelmi vétségnek számít.
A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.
```

## Telepítés

```bash
npm install
```

## Futtatás

```bash
npm start
```

## Tesztelés

A tesztelés a futtatással párhuzamosan is történhet. Ezt elsősorban a tanári értékelés megkönnyítésére hoztuk létre, de a hallgatók is láthatják ezt a felületet. Alapvetően a `stories` könyvtárhoz nem kell hozzányúlni. Ha azonban látod, hogyan működik, és saját tesztekkel kiegészítenéd, akkor azt nyugodtan tedd meg. A komponens interfészén azonban változtatni nem szabad!

```bash
npm run storybook
```

## Leírás

A keretprogram egy egyszerű és lecsupaszított alkalmazás Vite-tel létrehozva. A fő `App` komponens egyszerűen csak megjeleníti a `FunctionTester` komponenst. A feladatod ennek a `FunctionTester` komponensnek az elkészítése. A legjobb az lenne, ha a megoldásod a `function-tester` könyvtárba kerülne, és azon belül hoznál létre további fájlokat és könyvtárakat igény szerint.
