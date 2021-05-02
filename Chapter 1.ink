=== Chapter_1 ===
    { chapter(1, "So, This is Nuln") }
    
    Cheap passage on a grain-transport ship. It's been a week since you left your parents Wissenland farmstead, a week in which you've already started to wonder if adventuring was any more exciting than farming...
    
        -> determineOutlook ->
        -> makeAFriendMaybe ->
        -> theCityComesIntoView ->
        -> theBoatGoesThroughTheCity ->
        -> theBoatDocks ->
        
    ->->
    

=== determineOutlook ===
        * The perpetual rain[...] feels like a constant companion. It made your life a misery on the farm, and now it is making your life a misery on the river. -> gloomyOutlook ->->
        * A brief ray of sunshine[...] breaks through the rain, and just for a moment the sky flashes with the colours of a rainbow. -> positiveOutlook ->->
        * Your companions[...] are a mixed bunch, but their stories all share a theme. A need to escape the tedium of their rural lives. -> companions ->->
    
    == companions ==
        * Fools[...], all of them, of course. That prancing ninny who fancies himself an actor will be on the streets in a week, and that big idiot thinks he'll make a name for himself in the arena? Ha! -> gloomyloner ->->
        * The flower of youth[...], thrown together by fate, no doubt to be scattered again once they reach the city. -> positiveExtrovert ->->
        * Time will tell[...] whether this is the begining of a new age, or just another band of fools arriving to be chewed up by the city. -> balancedOutlook ->->
    
    == gloomyOutlook ==
        { setCharacterOutlookToGloomy() }
        - 'Maybe this is the truth of it', you mutter under your breath.
        - `Maybe it just rains on everyone and that's all there is to it?`
        ->->
    
    == positiveOutlook ==
        { setCharacterOutlookToPositive() }
        - 'And that's the truth of it', you mutter under your breath.
        - `Pa just saw the rain. I see the rainbow.`
        ->->
    
    == balancedOutlook ==
        { setCharacterOutlookToBalanced() }
        { setCharacterIsGregarious() }
        - 'Aye', you mutter under your breath. 'Time will tell.'
        ->->
    
    == gloomyloner ==
        { setCharacterIsLoner() }
        - Either way, it's raining.     
        -> gloomyOutlook ->->
        
    == positiveExtrovert ==
        { setCharacterIsGregarious() }
        - Suddenly one of your companions gasps and points to the sky. A glint of sunlight has broken through the clouds and a bright rainbow shines overhead. -> positiveOutlook ->->


=== makeAFriendMaybe ===
    ~ temp dice_roll = RANDOM(1, 3)
    {
    	- dice_roll == 1:
    		-> approachedByDuane
    	- dice_roll == 2:
    		-> approachedByJasper
    	- else:
    		-> approachVassalt
    }
    
    == approachedByDuane ==
        Duane, the big lummox, approaches you for a chat.
        {loner():
            * [Raise eyebrow] -> awkwardChatWithDuane ->->
          - else:
            * [Grin] -> niceChatWithDuane ->->
        }

    == approachedByJasper ==
        Jasper, the man with dreams of the stage, approaches for a chat
        {loner():
            * [Raise eyebrow] -> awkwardChatWithJasper ->->
          - else:
            * [Grin] -> niceChatWithJasper ->->
        }
    == approachVassalt ==
        Vassalt isn't like the other passengers. He wears the black of The Inquisition, and although everyone assumes he travels on business, the truth is that no-one has approached him to ask.
        - He stands now, watching the horizon intently.
        {loner():
            * [peace and quiet..] -> noChat ->->
          - else:
            * [Approach Vassalt] -> awkwardChatWithVassalt ->->
        }

    == awkwardChatWithDuane ==
        an awkward chat with Duane ensues 
        * [...] ->->
    == niceChatWithDuane ==
        a nice chat with Duane ensues
        * [...] ->->
    == awkwardChatWithJasper ==
        an awkward chat with Jasper ensues
        * [...] ->->
    == niceChatWithJasper ==
        a nice chat with Jasper ensues
        * [...] ->->
    == awkwardChatWithVassalt ==
        an awkward chat with Vassalt ensues
        * [...] ->->
    == noChat ==
        you get some peace and quiet
        * [...] ->->


=== theCityComesIntoView ===
    The city comes into view; some interaction with a companion etc.
    ->->
=== theBoatGoesThroughTheCity ===
    The boat goes through the city; some interaction with a companion etc.
    ->->
=== theBoatDocks ===
    The boat docks; some interaction with a companion etc.
    ->->

