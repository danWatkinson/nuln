=== Chapter_1 ===
{ chapter(1, "So, This is Nuln") }

Cheap passage on a grain-transport ship. It's been a week since you left your parents Wissenland farmstead, a week in which you've already started to wonder if adventuring was any more exciting than farming...

    -> determineOutlook ->
    -> makeAFriendMaybe ->
    
->->


=== determineOutlook
    * The perpetual rain[...] feels like a constant companion. It made your life a misery on the farm, and now it is making your life a misery on the river. -> gloomyOutlook ->->
    * A brief ray of sunshine[...] breaks through the rain, and just for a moment the sky flashes with the colours of a rainbow. -> positiveOutlook ->->
    * Your companions[...] are a mixed bunch, but their stories all share a theme. A need to escape the tedium of their rural lives. -> companions ->->

== companions
    * Fools[...], all of them, of course. That prancing ninny who fancies himself an actor will be on the streets in a week, and that big idiot thinks he'll make a name for himself in the arena? Ha! -> gloomyloner ->->
    * The flower of youth[...], thrown together by fate, no doubt to be scattered again once they reach the city. -> positiveExtrovert ->->
    * Time will tell[...] whether this is the begining of a new age, or just another band of fools arriving to be chewed up by the city. -> balancedOutlook ->->

== gloomyOutlook
    { setCharacterOutlookToGloomy() }
    - 'Maybe this is the truth of it', you mutter under your breath.
    - `Maybe it just rains on everyone and that's all there is to it?`
    ->->

== positiveOutlook
    { setCharacterOutlookToPositive() }
    - 'And that's the truth of it', you mutter under your breath.
    - `Pa just saw the rain. I see the rainbow.`
    ->->

== balancedOutlook
    { setCharacterOutlookToBalanced() }
    { setCharacterIsGregarious() }
    - 'Aye', you mutter under your breath. 'Time will tell.'
    ->->

== gloomyloner
    { setCharacterIsLoner() }
    - Either way, it's raining.     
    -> gloomyOutlook ->->
    
== positiveExtrovert
    { setCharacterIsGregarious() }
    - Suddenly one of your companions gasps and points to the sky. A glint of sunlight has broken through the clouds and a bright rainbow shines overhead. -> positiveOutlook ->->


=== makeAFriendMaybe
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



//* The boat arrives.[] You disembark on the docklands of Weston in Neustat


// the docks are busy, the ships crew and the waiting dock-hands get straight to work unloading the cargo.
// ->END
// // ~ temp dice_roll = RANDOM(1, 3)
// // {
// // 	- dice_roll == 1:
// // 		-> approachedByGrolsh
// // 	- dice_roll == 2:
// // 		-> approachedByBossman
// // 	- else:
// // 		-> quayside
// // }
