var citas = [
    "Click. Boom. &iexcl;Asombroso!//Steve Jobs//fav|steve jobs,apple,motivational",
    "El diseño no es sólo cómo se ve o cómo se siente. El Diseño es cómo funciona//Steve Jobs//Paulo Nunes|steve jobs,apple,motivational,design,functionality",
    "¿Por qué enrolarse en la armada cuando puedes ser un pirata?//Steve Jobs//fav|steve jobs,funny,pirate,apple",
    "La innovación distingue entre un líder y un seguidor//Steve Jobs|steve jobs,innovation,leader",
    "La calidad es más importante que la cantidad. Un 'home run' es mucho mejor que dos dobles//Steve Jobs//DaLancelotBruh//twitter|steve jobs,quality",
    "Hay gente que lo único que quiere es ver arder el mundo//Alfred, Batman//DaLancelotBruh//twitter//fav|joker,philosophy of chaos",
    "Si se te da bien algo, nunca lo hagas gratis…//Joker, Batman//DaLancelotBruh//twitter|joker, philosophy of chaos",
    "Ya no puedes fiarte de nadie. Si quieres algo, tienes que hacerlo tú, ¿no crees?//Joker, Batman//DaLancelotBruh//twitter|joker,philosophy of chaos",
    "No es sino la sombra de una ilusion lo que amas, no puedo darte lo que anhelas//Aragorn, El Se&ntilde;or de los Anillos//lorenzo.v.matterhorn.948//facebook|emotional",
    "&iexcl;Algebraico!//Finn el Humano, Hora de Aventuras//toofartooblack//tumblr//fav|funny,Adventure Time",
    "Veni, vidi, vinci//Julio Cesar//lorenzo.v.matterhorn.948//facebook|latin, emperor",
    "Lo que hacemos en nuestras vidas tiene su eco en la eternidad//Maximo Decimo Meridio, Gladiator//lorenzo.v.matterhorn.948//facebook|philosophical",
    "Hazlo, o no lo hagas, pero no lo intentes//Yoda, Star Wars//lorenzo.v.matterhorn.948//facebook|yoda,legend",
    "Relaxing cup of caf&eacute; con leche in Plaza Mayor//Ana Botella//lorenzo.v.matterhorn.948//facebook|NSFW",
    "Con el ojo por ojo, al final todos ciegos//Mahatma Gandhi//Alex Coll|funny,gandhi",
    "Es el sindrome FLictonic CLipple Weber//Haruko Haruhara, Furi Curi//DaLancelotBruh//twitter//fav|anime,legend",
    "La ciudad se llenó de humo, olvidando que ahí fuera existe un mundo. No hay cosas extraordinarias, vives en un mundo donde sólo hay cosas obvias. Una vida entera que espera morir lentamente... Pero Haruko está aquí y yo no olvido que existe un mundo ahí fuera.//Raharu Haruha, Furi Curi//DaLancelotBruh//twitter//fav|legend,philosophical",
    "Con un ejercito detras se puede ser sumamente politico//Gayo, Gladiator//lorenzo.v.matterhorn.948//facebook|emperor,politician,war,philosophical",
    "Instaura una pequeña anarquía, altera el orden establecido, y comenzará a reinar el caos. Soy un agente del caos. ¿Y sabes qué tiene el caos? Que es justo//Joker, Batman//toofartooblack//tumblr|joker,philosophy of chaos",
    "&iexcl;ESTO ES ESPARTA!//Leonidas, 300 La Pelicula//lorenzo.v.matterhorn.948//facebook",
    "Quisiera volver a verte hoy mismo, pero estoy dispuesto a esperar toda la noche y buena parte de ma&ntilde;ana//Augustus Waters, Bajo la misma Estrella//toofartooblack//tumblr//fav",
    "Oh, no me importaría Hazel Grace. Sería un privilegio que me rompieras el coraz&oacute;n//Augustus Waters, Bajo la misma Estrella//toofartooblack//tumblr//fav",
    "Es una metafora. Te colocas el arma asesina entre los dientes, pero no le das el poder de matarte//Augustus Waters, Bajo la misma Estrella//toofartooblack//tumblr//fav",
    "Aceptamos el amor que creemos merecer//Profesor Bill, Ventajas de Ser un Marginado//toofartooblack//tumblr//fav",
    "Yo no soy un monstruo... sólo voy un paso por delante//Joker, Batman//toofartooblack//tumblr//fav",
    "No somos buenos en todo, no somos buenos por nosotros mismos//Simon Sinek//DaLancelotBruh//twitter//fav",
    "Soy el tipo de persona que si no sabe una respuesta le diré que no la sé. Pero le apuesto a que sé cómo encontrar la respuesta, y la encontrar&eacute;.//En Busca de la Felicidad//DaLancelotBruh//twitter",
    "Esta parte de mi vida, este pequeño momento de mi vida lo llamo Felicidad//En Busca de la Felicidad//toofartooblack//tumblr",
    "Cuando se atisba un rato de felicidad siempre hay alguien que quiere destruirla//En Busca de la Felicidad//toofartooblack//tumblr//fav",
    "Si tienes un sueño tienes que protegerlo. Las personas que no llegan alto te dirán que seas igual que ellas. Si quieres algo ve por ello y punto//En Busca de la Felicidad//toofartooblack//tumblr//fav",
    "La vida es una partida y hay que vivirla de acuerdo con las reglas del juego//Guardi&aacute;n entre el Centeno//toofartooblack//tumblr//fav",
    "Me alegro de que inventaran la bomba atómica: así si necesitan voluntarios para ponerse debajo cuando la lancen, puedo presentarme el primero//Guardi&aacute;n entre el Centeno//toofartooblack//tumblr//fav",
    "No sé por qué hay que dejar de querer a una persona sólo porque se ha muerto. Sobre todo si era cien veces mejor que los que siguen viviendo//Guardi&aacute;n entre el Centeno//toofartooblack//tumblr",
    "Si yo fuera pianista, tocaría dentro de un maldito armario//Guardi&aacute;n entre el Centeno//toofartooblack//tumblr//fav",
    "No cuenten nunca nada a nadie. En el momento en que uno cuenta cualquier cosa, empieza a echar de menos a todo el mundo//Guardi&aacute;n entre el Centeno//toofartooblack//tumblr//fav",
    "Tu puedes llorar, no hay ninguna verg&uuml;enza en eso//Will Smith//toofartooblack//tumblr",
    "Vive el dia como si tú lo inventaras//Will Smith//toofartooblack//tumblr",
    "Lo que para una persona puede ser una distancia prudencial, para otra puede ser un abismo//After Dark, Haruki Murakami//toofartooblack",
    "La gente lo llama amor//Tokio Blues, Haruki Murakami//toofartooblack",
    "&iexcl;Mi Madre!//Musculitos, Historias Corrientes//DaLancelotBruh//twitter//fav",
    "Me gustaria decir que esto no es una autobiografia y que es una historia, pero si lo hiciese mentiria//Paulo Nunes, Mi autobiografia//SwagCokieMnstr//facebook",
    "El fracaso es una gran oportunidad para empezar otra vez con más inteligencia//Henry Ford//fluffypuffyunic//tumblr//fav",
    "Nadie mas que uno puede liverar su mente de la esclavitud//Bob Marley//fluffypuffyunic//tumblr//fav",
    "Algunas personas simplemente nacen siendo estrellas, lo tienes o no lo tienes y yo, definitivamente nací siendo una//Lady Gaga//fluffypuffyunic//tumblr",
    "No puedes tener un mejor mañana si sigues pensando en el ayer//Taylor Swift//DaLancelotBruh//twitter//fav",
    "Si el plan A no funciona pasa al plan B y sino recuerda que hay mas letras en el abcdario//Anonimo",
    "Meu estilo de vida liberta minha mente, completamente louco mas un louco consciente//Chorao, Cantante//fav",
    "La parte buena de hacer una autobiografia es que tienes toda una vida para hacerla y siempre tendras nuevos capitulos a hacer, eso si, centrate mas a que cada capitulo que hagas sea mas emocionante//Edgar Careta Cavagliani, El Pensador//edgar.careta//facebook//fav",
    "Quiero morir de felicidad, no de vejez//Pau Escalé//edgar.careta//facebook//fav",
    "Cuando un problema no tiene solución, no es un problema. Cuando un problema tiene solución, no es un problema//Edgar Careta Cavagliani, El Pensador//edgar.careta//facebbok",
    "La dialetica es la Ciencia de las ideas//Platon//edgar.careta//facebbok//fav",
    "El lunatico es quien mas sabe, y por eso lo esta//Edgar Careta Cavagliani, El Pensador//edgar.careta//facebook//fav",
    "Los rumores de mi promiscuidad han sido muy exagerados. Solía ser anónima, invisible para el sexo opuesto. Si Google Earth fuese un hombre no podría encontrarme aunque estuviese vestida como un edificio de diez pisos//Olive Penderghast, Rumores y Mentiras//toofartooblack//tumblr//fav|emotional",
    "Señor dame fuerza para cambiar las cosas que puedo cambier, valor para aceptar las cosas que no puedo cambiar y sabiduría para reconocer la diferencia//Una Historia Casi Divertida//toofartooblack//tumblr//fav|anchorer,pure,legend,deep shit",
    "El pueblo no deberiía temer al gobierno, el gobierno debería temer al pueblo//V de Vendetta, de Hugo Weaving//toofartooblack//tumblr//fav|pure,truth,anchorer,legend",
    "Los ideales son a prueba de balas//V de Vendetta, de Hugo Weaving//toofartooblack//tumblr//fav|revolutional,motivational,pure,anchorer,legend",
    "Este 'concherto' se lo dedico a la señora justícia, en honor a las vacaciones que parece se está tomando y en reconocimiento al impostor que ha ocupado su lugar//V de Vendetta, de Hugo Weaving//toofartooblack//tumblr//fav|revolutional,pure,anchorer,legend",
    "El artista miente para mostrar la verdad, el político para ocultarla//V de Vendetta, de Hugo Weaving//toofartooblack//tumblr//fav|revolutional,motivational,politics,pure,anchorer,legend",
    "¿Para qué la salida de emergencia a 10.000 metros de altura? Ilusión de seguridad//El Club de la Lucha//toofartooblack//tumblr|legend,pure",
    "La publicidad nos hace desear coches y ropas, tenemos empleos que odiamos para comprar mierda que no necesitamos. Somos los hijos malditos de la historia, desarraigados y sin objetivos. No hemos sufrido una gran guerra, ni una depresión. Nuestra guerra es la guerra espiritual, nuestra gran depresión es nuestra vida. Crecimos con la televisión que nos hizo creer que algún día seriamos millonarios, dioses del cine o estrellas del rock, pero no lo seremos y poco a poco lo entendemos, lo que hace que estemos muy cabreados//El Club de la Lucha//toofartooblack//tumblr//fav|legend",
    "Porque a veces la verdad no es suficiente. A veces la gente se merece algo más. A veces la gente se merece una recompensa por tener fe//Joker ,Batman: El Caballero Oscuro//toofartooblack//tumblr//fav|philosophy of chaos,joker,legend",
    "La verdad es como una manta que siempre te deja los pies fríos. La estiras, la extiendes y nunca es suficiente. La sacudes, le das patadas, pero no llega a cubrirnos. Y desde que llegamos llorando hasta que nos vamos muriendo sólo nos cubre la cara, mientras gemimos, lloramos y gritamos//El Club de los Poetas Muertos//toofartooblack//tumblr//fav|pure,legend,ancorer"
];

var quotes = [
    "I kept taking shots because they burned my chest where I was trying to get you out//drinkt0forget, tumblr User//drinkt0forget//tumblr//fav|tumblr,sadness",
    "Whatever makes you weird, is probably your greatest asset//Joss Whedon//DaLancelotBruh//twitter//fav|tumblr",
    "Same rules apply//Bruce Robertson, Filth//toofartooblack//tumblr//fav|tumblr,legend,filth",
    "Homies. Help homies. Always.//Adventure Time (Hora de Aventuras)//toofartooblack//tumblr//fav|Adventure Time,funny",
    "I am Shakespeare in the flesh//Kanye West, Interview with Sway Universe//toofartooblack//tumblr//fav|Kanye legend, shakespeare",
    "Cry as much as you want to, but make sure when you're finished, you never cry for the same reason again//Wiz Hhalifa//toofartooblack//tumblr|motivational",
    "If she's amazing, she won't be easy. If she's easy, she won't be amazing. If she's worth it, you wont give up. If you give up, you're not worthy. ... Truth is, everybody is going to hurt you; you just gotta find the ones worth suffering for//Bob Marley//hugsanddrugsssss//tumblr//fav|bob marley,legend",
    "the things you own end up owning you//Tyler Durden, Fight Club//hugsanddrugsssss//tumblr//fav|philosophical",
    "We make up horrors to help us cope with the real ones//Stephen King//hugsanddrugsssss//tumblr//fav|tumblr,real world,pure",
    "I don't want to die without any scars//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav|figther,tumblr,pure",
    "It's only after we've lost everything that we're free to do anything//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav|freedom,pure,tumblr",
    "You are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav|tumblr,figther",
    "Everyone smiles with that invisible gun to their head//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav|sadness,tumblr",
    "The lower you fall, the higher you'll fly//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav|motivational",
    "It's not love or anything, but I think I like you, too//Chuck Palahniuk, Fight Club//hugsanddrugsssss//tumblr//fav|love,pure,tumblr,legend",
    "Life's pretty good, and why wouldn't it be? I'm a pirate, after all//Johnny Depp//hugsanddrugsssss//tumblr//fav|funny,depp shit",
    "I'm not sure I'm adult yet//Johnny Depp//hugsanddrugsssss//tumblr//fav|depp shit,tumblr,legend",
    "maybe this world is another planet's hell?//Aldous Huxley//hugsanddrugsssss//tumblr//fav|philosophical,hypothetical",
    "Silence is one of the hardest arguments to refute//Josh Billings//hugsanddrugsssss//tumblr//fav|truth,pure,tumblr",
    "I told my psychiatrist that everyone hates me. He said I was being ridiculous...//...Everyone hasn’t met me yet//hugsanddrugsssss//tumblr//fav|sadness,truth,pure,anchorer",
    "I don't judge, I only hate//Annie Dubaj//hugsanddrugsssss//tumblr//fav|tumblr,truth,anchorer",
    "I hate people, cause its free//Annie Dubaj//hugsanddrugsssss//tumblr//fav|tumblr,truth,anchorer",
    "They promised that dreams can come true, but forgot to mention that nightmares are dreams too//Oscar Wilde//hugsanddrugsssss//tumblr//fav|truth,pure,tumblr,legend",
    "They judge me like a picture book, by the colours like they forgot to read//Lana Del Rey, Brooklyn Baby//hugsanddrugsssss//tumblr//fav|pure",
    "Live fast. Die young. Be wild. Have fun//Lana Del Rey//hugsanddrugsssss//tumblr//fav|pure",
    "Doing what you love is freedom. Loving what you do is happiness//Lana Del Rey//hugsanddrugsssss//tumblr//fav|freedom,happiness,pure,truth,legend",
    "Sometimes love is not enough and the road gets tough. I don’t know why//Lana Del Rey//hugsanddrugsssss//tumblr//fav|pure",
    "Don’t let people treat you like a cigarette, they only use you when theyre bored and step on you when theyre done. Be like drugs, let them die for you//Anonymous//hugsanddrugsssss//tumblr//fav|deep shit,truth,pure",
    "We're all mad here//Lewis Carroll, Alice in Wonderland//hugsanddrugsssss//tumblr//fav|truth",
    "Alice: How long is forever? White Rabbit: Sometimes, just one second//Lewis Carroll, Alice in Wonderland//hugsanddrugsssss//tumblr//fav|truth,philosophical,wonderland",
    "Imagination is the only weapon in the war against reality//Lewis Carroll, Alice in Wonderland//hugsanddrugsssss//tumblr//fav|truth",
    "People cry, not because they’re weak. It’s because they’ve been strong for too long//Johnny Depp//hugsanddrugsssss//tumblr//fav|depp shit,legend",
    "Past is just waiting to fuck you up//James Cook, Skins//hugsanddrugsssss//tumblr//fav|james cook,legend,cook philosophy,skins",
    "James Cook: I fucking love you, man. I fucking love you to bits// James Cook, Skins//hugsanddrugsssss//tumblr//fav|james cook,legend,skins",
    "JJ: Do you know what Naomi is spelled backwards? Cook: What? JJ: I moan.//Everyone Season 3, episode 1. Skins (2009) //hugsanddrugsssss//tumblr//fav|naomi,legend,skins,pure",
    "I'm James Cook!//James Cook, Skins//toofartooblack//tumblr//fav|james cook,skins",
    "There is a pleasure in the pathless woods;<br>There is a rapture on the lonely shore;<br>There is society, where none intrudes,<br>By the sea, and music in its roar, I love not man the less, but Nature more...//Lord Byron, Into The Woods//toofartooblack//tumblr//fav|nature,vintage,pure",
    "The core of man's spirit comes from new experiences//Christopher McCandless, Into The Wild//toofartooblack//tumblr//fav|pure,spirit",
    "If we admit that human life can be ruled by reason, then all possibility of life is destroyed//Christopher McCandless, Into The Wild//toofartooblack//tumblr//fav|pure,spirit",
    "I'm going to paraphrase Thoreau here... rather than love, than money, than faith, than fame, than fairness... give me truth//Christopher McCandless, Into The Wild//toofartooblack//tumblr//fav|pure,spirit",
    "when you forgive, you love. And when you love, God's light shines through you//Ron Franz, Into The Wild//toofartooblack//tumblr//fav|pure,truth,god,legend,nature,the light",
    "That poor girl's about ready to vault herself onto a fencepost//Rainey, Into The Wild//toofartooblack//tumblr//fav|pure,funny",
    "You are really good. I mean, you're like, a hundred thousand times better than like any apple I've ever had. I'm not Superman, I'm Supertramp and you're super apple. You're so tasty, you're so organic, so natural. You are the apple of my eye, ha!//Christopher McCandless, Into The Wild//toofartooblack//tumblr//fav|pure,funny,nature,apple,Supertramp,legend"
];