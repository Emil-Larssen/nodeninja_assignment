### NodeNinja 
NodeNinja er en simpel HTTP server bygget med express, som kan læse og skrive (overskrive) til en fil specificeret i koden.
Dvs. et GET/read-file endpoint og et POST/write-file endpoint.

### Asynkronitet  
Når en asynkron funktion kaldes, returneres et "promise" om at der på et senere tidspunkt kommer et resultat.  
Node's event loop kan i mellemtiden fortsætte med at håndtere andre requests og opgaver.
await keywordet indikerer hvor den asynkrone funktion skal afvente at det pågældende promise opfyldes eller afvises.

### Event-emitter
Event-emitter er sat op som et eventBUS der indeholder en singleton emitter instance.
emitter er eksporteret så den kan emitte fra server.js og logge i logger.js der begge bruger require eventBUS.

logging er meget forsimplet i NodeNinja.
4 events bliver emittet, start af server, read request, write request samt ukendt request (ukendt http sti)  
For read og write emittes kun at requestet er modtaget, men ikke udfaldet af det pågældende request.  
Ligeledes er der kun anvendt et console.log, den direkte udvidelse er timestamp, samt append til fil fremfor console.log.

----------------
### AI
AI er primært anvendt som sparingspartner, og har på intet tidspunkt rørt koden.
opsummering af spørgsmål findes i filen ai_log.md
----------------

Bonus udvidelser skippet grundet sygdom

------------

### Request-test
Til test af mange requests er anvendt, som foreslået, axios.
simulate_clients.js køres fra en terminal fra stien .\nodeninja med "node simulate_clients.js"  
skaleret op til 1000 clients fremfor 10.

--------------
### Afslutningsvis
Den vigtigste forskel mellem den måde, vi håndterede samtidighed på i vores Java-server, og den måde Node.js-serveren arbejder på, er …  
(Jeg har endnu ikke lavet chat projektet, men svaret er thread management)