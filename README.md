# Op 't Water

The printers and publishers of Amsterdam song books in the seventeenth century, from
the Dutch Song Database, placed at the addresses in their imprints on an engraved map
of Amsterdam, and walkable in 3D as their street stood in any year of the century.

**Live:** https://www.karsdorp.io/amsterdam-song-map/

1. **The map.** Gerrit de Broen's engraved map of Amsterdam, or Berckenrode's
   bird's-eye view of 1625 (press `M`).
2. **The century.** From 1600 to 1700 every song book drops as a small volume onto the
   shop that printed or sold it. Hover a book for its title, click it for its card.
3. **The busiest street.** 't Water, the quay along the Damrak: 116 song books from 31
   printers and booksellers.
4. **The walk.** The houses stand on the plots of the 1832 cadastre, each with the front
   it had in the year shown. The printers' shops are open, with their painted signs.
   Walk with `W A S D` (drag to look), or press `Space` to stroll from shop to shop.
5. **The sound.** Switch on **Sound** in the street for the open air, gulls over the
   Damrak, and the church bells: a short chime before about 1658, a carillon tune after.

This repository holds the built site only: static HTML, JavaScript and JSON. It needs
a network connection for the map tiles.

## Sources

- **Song books, printers and imprints:** the Dutch Song Database / Nederlandse
  Liederenbank (Meertens Instituut). Each book links to its page there.
- **Printers' identities and addresses:** the STCN (Short-Title Catalogue,
  Netherlands) and its printers' thesaurus.
- **Map tiles:** the Huygens Webmapper (`images.huygens.knaw.nl/webmapper`), maps by
  Gerrit de Broen and by Balthasar Florisz. van Berckenrode (1625).
- **House plots and the city behind the street:** the 1832 cadastre from HisGIS
  Amsterdam, via "Amsterdam huurwaarden 1832", University of Amsterdam, CC BY 4.0,
  https://zenodo.org/records/6949127.
- **Sounds:** the air is made in the browser. Gulls: Sonothèque ADVL (CC0). Quarter chime
  and hour bell of St. Georgen, St. Gallen: Martin Thurnherr (CC BY-SA 4.0). Carillon of
  the Vor Frelsers Kirke, Copenhagen: Ib Rasmussen (public domain). All via Wikimedia
  Commons; not Amsterdam bells. Details in `sounds/CREDITS.md`.
- **Street centrelines and a few landmark footprints:** © OpenStreetMap contributors,
  ODbL.

## Caveats

- **What is generated:** the houses' fronts follow broad period rules for Amsterdam
  (gable types, windows, materials by date). They are not reconstructions of the
  actual buildings, and the years of refronting are invented. The plots are measured.
- **Vanished landmarks:** the Old Town Hall, the Waag on the Dam and the Korenbeurs are
  placed from the two maps, with simplified forms.
- **Addresses:** each comes from the book's own imprint where possible, otherwise from
  the STCN for that year. Where only the street is known, the printer's house along it
  is placed for illustration. The cards say which applies.
