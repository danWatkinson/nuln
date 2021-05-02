=== Chapter_1 ===
{ chapter(1, "So, This is Nuln") }

Bored of life as a farm-hand, you bought passage to Nuln.

* The boat arrives.[] You disembark on the docklands of Weston in Neustat


the docks are busy, the ships crew and the waiting dock-hands get straight to work unloading the cargo.

~ temp dice_roll = RANDOM(1, 3) 
{ 
	- dice_roll == 1:
		-> approachedByGrolsh
	- dice_roll == 2:
		-> approachedByBossman
	- else:
		-> quayside
}

=approachedByBossman
a heavy-set man in a grimy tunic barges through the melee in your direction. 
"Lad. You look new. Get lifting, follow Johan here - he indicates a grubby specimin nearby - and we'll get you a meal and a bed for the night.."
-> talking_to_Bossman

= joinDockers
    you traipse around following Johan
    -> talking_to_Johan -> quayside

    
= talking_to_Bossman
* [grab a nearby barrel] 
    You nod, grab the nearest barrel, heft it on your shoulder and follow Johan
    -> joinDockers
* [grab a nearby sack]
    You nod, grab the nearest sack, heft it on your shoulder and follow Johan 
    -> joinDockers
* [negotiate..]
    'Hey, just because i'm new in town doesn't mean i'm a mug - I'll need cash too..'
    ** [The heavy set man looks you in the eye] Listen son. You want to talk money? Thats what we make when the work gets done. If you know how to work you might get to see some of it.. -> talking_to_Bossman
* [nah..]
    This isn't for you. You came here to find something more than carrying heavy things. You shake your head and step past the man and onto the quayside. ->quayside

=approachedByGrolsh
  dodgy dutch accent blahblah
  * [piss off] -> quayside

= quayside
# IMAGE: ./images/avatar.jpeg

->->

=== talking_to_Johan === 
	*	[Talk about the weather] -> chat_weather 
	*	[Talk about the children] -> chat_children 
	+	->->

=== chat_weather
- weather nice? you ask
'whatever; twat.'
-> talking_to_Johan
=== chat_children
- got kids
'no'
-> talking_to_Johan


