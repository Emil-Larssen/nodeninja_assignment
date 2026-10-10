## AI-brug i projektet


### Konkrete områder hvor AI blev brugt

- Forklaring af forskellen mellem en almindelig Node.js HTTP-server og en Express-server.
- Hjælp til at forstå hvordan routes som `GET /read-file` og `POST /write-file` defineres i Express.
- Hjælp til at bygge en relativ filsti med `__dirname` og `path.join()` i stedet for at hardcode en lokal sti.
- Forklaring af forskellen mellem filesystem-fejl og HTTP-statuskoder.
- Hjælp til at forstå hvordan JSON fra en POST-request bliver tilgængelig via `req.body`.
- Sparring omkring validering af manglende `content` og valg af `400 Bad Request`.
- Hjælp til at identificere at et manglende `return` gjorde at koden fortsatte efter et fejlsvar.
- Hjælp til at refaktorere callback-baseret filhåndtering til `async/await` og `try/catch`.
- Forklaring af hvordan `EventEmitter` kan deles mellem flere filer ved at eksportere én fælles emitter-instans.
- Fejlsøgning af EventEmitter-problemet, hvor den forkerte værdi blev eksporteret fra modulet.
- Sparring omkring opdeling mellem `server.js`, EventEmitter og logging.
- Hjælp til at vurdere hvilke requests der skulle udløse log-events.
- Forklaring af hvad der sker i Node.js mens en asynkron filoperation venter.
- Kontrol af at den automatiske test med mange requests faktisk tester serverens evne til at håndtere flere requests tæt efter hinanden.

### Hvordan AI-forslag blev kontrolleret

AI-forslag blev ikke bare kopieret direkte ind. De blev løbende testet i projektet med blandt andet:

- Postman til GET- og POST-requests.
- Bevidst ændring af filstier for at fremkalde fejl.
- Requests med manglende JSON-data.
- Console logging til fejlsøgning af EventEmitter.
- Test af ukendte routes og 404-respons.
- En automatiseret test med op til 1000 requests tæt efter hinanden.

Forslag blev kun beholdt, hvis de gav mening i forhold til kravene og virkede efter test.

(AI blev anvendt til at danne denne log med udgangspunkt I den løbende chat for projektet.)