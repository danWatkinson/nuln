var storyContent = ﻿{"inkVersion":19,"root":[["\n","\n","\n","\n","\n","\n","\n","\n",{"->t->":"Chapter_1"},{"->t->":"Chapter_2"},{"->t->":"Chapter_3"},{"->t->":"Chapter_4"},{"->t->":"Chapter_5"},{"->t->":"Chapter_6"},"end",["done",{"#f":5,"#n":"g-0"}],null],"done",{"chapter":[{"temp=":"title"},{"temp=":"number"},"^-- Chapter ","ev",{"VAR?":"number"},{"f()":"print_num_capitalised"},"out","/ev","^ --  ",{"#":"CLASS: Chapter"},"\n","^- ","ev",{"VAR?":"title"},"out","/ev","^ -                                      ",{"#":"CLASS: Chapter"},"\n",{"#f":1}],"print_num":[{"temp=":"x"},["ev",{"VAR?":"x"},1000,">=","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"x"},1000,"/",{"f()":".^.^.^"},"out","/ev","^ thousand ","ev",{"VAR?":"x"},1000,"%",0,">","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"x"},1000,"%",{"f()":"print_num"},"out","/ev",{"->":".^.^.^.17"},null]}],"nop","\n",{"->":".^.^.^.5"},null]}],["ev",{"VAR?":"x"},100,">=","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"x"},100,"/",{"f()":".^.^.^"},"out","/ev","^ hundred ","ev",{"VAR?":"x"},100,"%",0,">","/ev",[{"->":".^.b","c":true},{"b":["^and ","ev",{"VAR?":"x"},100,"%",{"f()":"print_num"},"out","/ev",{"->":".^.^.^.17"},null]}],"nop","\n",{"->":".^.^.^.5"},null]}],["ev",{"VAR?":"x"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^zero","\n",{"->":".^.^.^.5"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"x"},20,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"x"},10,"/","/ev",["du","ev",2,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^twenty","\n",{"->":".^.^.^.15"},null]}],["du","ev",3,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^thirty","\n",{"->":".^.^.^.15"},null]}],["du","ev",4,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^forty","\n",{"->":".^.^.^.15"},null]}],["du","ev",5,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^fifty","\n",{"->":".^.^.^.15"},null]}],["du","ev",6,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^sixty","\n",{"->":".^.^.^.15"},null]}],["du","ev",7,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^seventy","\n",{"->":".^.^.^.15"},null]}],["du","ev",8,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^eighty","\n",{"->":".^.^.^.15"},null]}],["du","ev",9,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^ninety","\n",{"->":".^.^.^.15"},null]}],"pop","nop","\n","ev",{"VAR?":"x"},10,"%",0,">","/ev",[{"->":".^.b","c":true},{"b":["<>","^-","<>",{"->":".^.^.^.25"},null]}],"nop","\n",{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"x"},10,"<",{"VAR?":"x"},20,">","||","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"x"},10,"%","/ev",["du","ev",1,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^one","\n",{"->":".^.^.^.16"},null]}],["du","ev",2,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^two","\n",{"->":".^.^.^.16"},null]}],["du","ev",3,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^three","\n",{"->":".^.^.^.16"},null]}],["du","ev",4,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^four","\n",{"->":".^.^.^.16"},null]}],["du","ev",5,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^five","\n",{"->":".^.^.^.16"},null]}],["du","ev",6,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^six","\n",{"->":".^.^.^.16"},null]}],["du","ev",7,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^seven","\n",{"->":".^.^.^.16"},null]}],["du","ev",8,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^eight","\n",{"->":".^.^.^.16"},null]}],["du","ev",9,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^nine","\n",{"->":".^.^.^.16"},null]}],"pop","nop","\n",{"->":".^.^.^.20"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"x"},"/ev",["du","ev",10,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^ten","\n",{"->":".^.^.^.15"},null]}],["du","ev",11,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^eleven","\n",{"->":".^.^.^.15"},null]}],["du","ev",12,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^twelve","\n",{"->":".^.^.^.15"},null]}],["du","ev",13,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^thirteen","\n",{"->":".^.^.^.15"},null]}],["du","ev",14,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^fourteen","\n",{"->":".^.^.^.15"},null]}],["du","ev",15,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^fifteen","\n",{"->":".^.^.^.15"},null]}],["du","ev",16,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^sixteen","\n",{"->":".^.^.^.15"},null]}],["du","ev",17,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^seventeen","\n",{"->":".^.^.^.15"},null]}],["du","ev",18,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^eighteen","\n",{"->":".^.^.^.15"},null]}],["du","ev",19,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^nineteen","\n",{"->":".^.^.^.15"},null]}],"pop","nop","\n",{"->":".^.^.^.20"},null]}],"nop","\n",{"->":".^.^.^.5"},null]}],"nop","\n",{"#f":1}],"print_num_capitalised":[{"temp=":"x"},["ev",{"VAR?":"x"},1000,">=","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"x"},1000,"/",{"f()":"print_num"},"out","/ev","^ thousand ","ev",{"VAR?":"x"},1000,"%",0,">","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"x"},1000,"%",{"f()":"print_num"},"out","/ev",{"->":".^.^.^.17"},null]}],"nop","\n",{"->":".^.^.^.5"},null]}],["ev",{"VAR?":"x"},100,">=","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"x"},100,"/",{"f()":"print_num"},"out","/ev","^ hundred ","ev",{"VAR?":"x"},100,"%",0,">","/ev",[{"->":".^.b","c":true},{"b":["^and ","ev",{"VAR?":"x"},100,"%",{"f()":"print_num"},"out","/ev",{"->":".^.^.^.17"},null]}],"nop","\n",{"->":".^.^.^.5"},null]}],["ev",{"VAR?":"x"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^zero","\n",{"->":".^.^.^.5"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"x"},20,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"x"},10,"/","/ev",["du","ev",2,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Twenty","\n",{"->":".^.^.^.15"},null]}],["du","ev",3,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Thirty","\n",{"->":".^.^.^.15"},null]}],["du","ev",4,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Forty","\n",{"->":".^.^.^.15"},null]}],["du","ev",5,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Fifty","\n",{"->":".^.^.^.15"},null]}],["du","ev",6,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Sixty","\n",{"->":".^.^.^.15"},null]}],["du","ev",7,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Seventy","\n",{"->":".^.^.^.15"},null]}],["du","ev",8,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Eighty","\n",{"->":".^.^.^.15"},null]}],["du","ev",9,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Ninety","\n",{"->":".^.^.^.15"},null]}],"pop","nop","\n","ev",{"VAR?":"x"},10,"%",0,">","/ev",[{"->":".^.b","c":true},{"b":["<>","^-","<>",{"->":".^.^.^.25"},null]}],"nop","\n",{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"x"},10,"<",{"VAR?":"x"},20,">","||","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"x"},10,"%","/ev",["du","ev",1,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^One","\n",{"->":".^.^.^.16"},null]}],["du","ev",2,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Two","\n",{"->":".^.^.^.16"},null]}],["du","ev",3,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Three","\n",{"->":".^.^.^.16"},null]}],["du","ev",4,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Four","\n",{"->":".^.^.^.16"},null]}],["du","ev",5,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Five","\n",{"->":".^.^.^.16"},null]}],["du","ev",6,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Six","\n",{"->":".^.^.^.16"},null]}],["du","ev",7,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Seven","\n",{"->":".^.^.^.16"},null]}],["du","ev",8,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Eight","\n",{"->":".^.^.^.16"},null]}],["du","ev",9,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Nine","\n",{"->":".^.^.^.16"},null]}],"pop","nop","\n",{"->":".^.^.^.20"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"x"},"/ev",["du","ev",10,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Ten","\n",{"->":".^.^.^.15"},null]}],["du","ev",11,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Eleven","\n",{"->":".^.^.^.15"},null]}],["du","ev",12,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Twelve","\n",{"->":".^.^.^.15"},null]}],["du","ev",13,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Thirteen","\n",{"->":".^.^.^.15"},null]}],["du","ev",14,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Fourteen","\n",{"->":".^.^.^.15"},null]}],["du","ev",15,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Fifteen","\n",{"->":".^.^.^.15"},null]}],["du","ev",16,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Sixteen","\n",{"->":".^.^.^.15"},null]}],["du","ev",17,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Seventeen","\n",{"->":".^.^.^.15"},null]}],["du","ev",18,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Eighteen","\n",{"->":".^.^.^.15"},null]}],["du","ev",19,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^Nineteen","\n",{"->":".^.^.^.15"},null]}],"pop","nop","\n",{"->":".^.^.^.20"},null]}],"nop","\n",{"->":".^.^.^.5"},null]}],"nop","\n",{"#f":1}],"Chapter_1":["ev",1,"str","^So, This is Nuln","/str",{"f()":"chapter"},"out","/ev","\n","^Cheap passage on a grain-transport ship. It's been a week since you left your parents Wissenland farmstead, a week in which you've already started to wonder if adventuring was any more exciting than farming...","\n",{"->t->":"determineOutlook"},{"->t->":"makeAFriendMaybe"},{"->t->":"theCityComesIntoView"},{"->t->":"theBoatGoesThroughTheCity"},{"->t->":"theBoatDocks"},"ev","void","/ev","->->",{"#f":1}],"determineOutlook":[[["ev",{"^->":"determineOutlook.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^...","/str","/ev",{"*":".^.^.c-0","flg":22},{"s":["^The perpetual rain",{"->":"$r","var":true},null]}],["ev",{"^->":"determineOutlook.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^...","/str","/ev",{"*":".^.^.c-1","flg":22},{"s":["^A brief ray of sunshine",{"->":"$r","var":true},null]}],["ev",{"^->":"determineOutlook.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^...","/str","/ev",{"*":".^.^.c-2","flg":22},{"s":["^Your companions",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"determineOutlook.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^ feels like a constant companion. It made your life a misery on the farm, and now it is making your life a misery on the river. ",{"->t->":"gloomyOutlook"},"ev","void","/ev","->->","\n",{"#f":5}],"c-1":["ev",{"^->":"determineOutlook.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"^ breaks through the rain, and just for a moment the sky flashes with the colours of a rainbow. ",{"->t->":"positiveOutlook"},"ev","void","/ev","->->","\n",{"#f":5}],"c-2":["ev",{"^->":"determineOutlook.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^ are a mixed bunch, but their stories all share a theme. A need to escape the tedium of their rural lives. ",{"->t->":"companions"},"ev","void","/ev","->->","\n",{"#f":5}]}],{"#f":1}],"companions":[[["ev",{"^->":"companions.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^...","/str","/ev",{"*":".^.^.c-0","flg":22},{"s":["^Fools",{"->":"$r","var":true},null]}],["ev",{"^->":"companions.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^...","/str","/ev",{"*":".^.^.c-1","flg":22},{"s":["^The flower of youth",{"->":"$r","var":true},null]}],["ev",{"^->":"companions.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^...","/str","/ev",{"*":".^.^.c-2","flg":22},{"s":["^Time will tell",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"companions.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^, all of them, of course. That prancing ninny who fancies himself an actor will be on the streets in a week, and that big idiot thinks he'll make a name for himself in the arena? Ha! ",{"->t->":"gloomyloner"},"ev","void","/ev","->->","\n",{"#f":5}],"c-1":["ev",{"^->":"companions.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"^, thrown together by fate, no doubt to be scattered again once they reach the city. ",{"->t->":"positiveExtrovert"},"ev","void","/ev","->->","\n",{"#f":5}],"c-2":["ev",{"^->":"companions.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^ whether this is the begining of a new age, or just another band of fools arriving to be chewed up by the city. ",{"->t->":"balancedOutlook"},"ev","void","/ev","->->","\n",{"#f":5}]}],{"#f":1}],"gloomyOutlook":[["ev",{"f()":"setCharacterOutlookToGloomy"},"out","/ev","\n",["^'Maybe this is the truth of it', you mutter under your breath.","\n",["^`Maybe it just rains on everyone and that's all there is to it?`","\n","ev","void","/ev","->->",{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"positiveOutlook":[["ev",{"f()":"setCharacterOutlookToPositive"},"out","/ev","\n",["^'And that's the truth of it', you mutter under your breath.","\n",["^`Pa just saw the rain. I see the rainbow.`","\n","ev","void","/ev","->->",{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"balancedOutlook":[["ev",{"f()":"setCharacterOutlookToBalanced"},"out","/ev","\n","ev",{"f()":"setCharacterIsGregarious"},"out","/ev","\n",["^'Aye', you mutter under your breath. 'Time will tell.'","\n","ev","void","/ev","->->",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"gloomyloner":[["ev",{"f()":"setCharacterIsLoner"},"out","/ev","\n",["^Either way, it's raining.","\n",{"->t->":"gloomyOutlook"},"ev","void","/ev","->->",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"positiveExtrovert":[["ev",{"f()":"setCharacterIsGregarious"},"out","/ev","\n",["^Suddenly one of your companions gasps and points to the sky. A glint of sunlight has broken through the clouds and a bright rainbow shines overhead. ",{"->t->":"positiveOutlook"},"ev","void","/ev","->->","\n",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"makeAFriendMaybe":["ev",1,3,"rnd","/ev",{"temp=":"dice_roll"},"\n",["ev",{"VAR?":"dice_roll"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"approachedByDuane"},{"->":".^.^.^.10"},null]}],["ev",{"VAR?":"dice_roll"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"approachedByJasper"},{"->":".^.^.^.10"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"approachVassalt"},{"->":".^.^.^.10"},null]}],"nop","\n",{"#f":1}],"approachedByDuane":["^Duane, the big lummox, approaches you for a chat.","\n","ev",{"f()":"loner"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Raise eyebrow","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.7"},{"c-0":["^ ",{"->t->":"awkwardChatWithDuane"},"ev","void","/ev","->->","\n",{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n","ev","str","^Grin","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.7"},{"c-0":["^ ",{"->t->":"niceChatWithDuane"},"ev","void","/ev","->->","\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"approachedByJasper":["^Jasper, the man with dreams of the stage, approaches for a chat","\n","ev",{"f()":"loner"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^Raise eyebrow","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.7"},{"c-0":["^ ",{"->t->":"awkwardChatWithJasper"},"ev","void","/ev","->->","\n",{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n","ev","str","^Grin","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.7"},{"c-0":["^ ",{"->t->":"niceChatWithJasper"},"ev","void","/ev","->->","\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"approachVassalt":[["^Vassalt isn't like the other passengers. He wears the black of The Inquisition, and although everyone assumes he travels on business, the truth is that no-one has approached him to ask.","\n",["^He stands now, watching the horizon intently.","\n","ev",{"f()":"loner"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^peace and quiet..","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.7"},{"c-0":["^ ",{"->t->":"noChat"},"ev","void","/ev","->->","\n",{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n","ev","str","^Approach Vassalt","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.7"},{"c-0":["^ ",{"->t->":"awkwardChatWithVassalt"},"ev","void","/ev","->->","\n",{"#f":5}]}]}],"nop","\n",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"awkwardChatWithDuane":[["^an awkward chat with Duane ensues","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ","ev","void","/ev","->->","\n",{"#f":5}]}],{"#f":1}],"niceChatWithDuane":[["^a nice chat with Duane ensues","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ","ev","void","/ev","->->","\n",{"#f":5}]}],{"#f":1}],"awkwardChatWithJasper":[["^an awkward chat with Jasper ensues","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ","ev","void","/ev","->->","\n",{"#f":5}]}],{"#f":1}],"niceChatWithJasper":[["^a nice chat with Jasper ensues","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ","ev","void","/ev","->->","\n",{"#f":5}]}],{"#f":1}],"awkwardChatWithVassalt":[["^an awkward chat with Vassalt ensues","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ","ev","void","/ev","->->","\n",{"#f":5}]}],{"#f":1}],"noChat":[["^you get some peace and quiet","\n","ev","str","^...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ","ev","void","/ev","->->","\n",{"#f":5}]}],{"#f":1}],"theCityComesIntoView":["^The city comes into view; some interaction with a companion etc.","\n","ev","void","/ev","->->",{"#f":1}],"theBoatGoesThroughTheCity":["^The boat goes through the city; some interaction with a companion etc.","\n","ev","void","/ev","->->",{"#f":1}],"theBoatDocks":["^The boat docks; some interaction with a companion etc.","\n","ev","void","/ev","->->",{"#f":1}],"Chapter_2":[["ev",2,"str","^Settling In","/str",{"f()":"chapter"},"out","/ev","\n",["ev",{"^->":"Chapter_2.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^The boat arrives.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Chapter_2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"^ You disembark on the docklands of Weston in Neustat","\n","^the docks are busy, the ships crew and the waiting dock-hands get straight to work unloading the cargo.","\n","ev",1,3,"rnd","/ev",{"temp=":"dice_roll"},"\n",["ev",{"VAR?":"dice_roll"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"Chapter_2.approachedByGrolsh"},{"->":".^.^.^.20"},null]}],["ev",{"VAR?":"dice_roll"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"Chapter_2.approachedByBossman"},{"->":".^.^.^.20"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"Chapter_2.quayside"},{"->":".^.^.^.20"},null]}],"nop","\n",{"#f":5}]}],{"approachedByBossman":["^a heavy-set man in a grimy tunic barges through the melee in your direction.","\n","^\"Lad. You look new. Get lifting, follow Johan here - he indicates a grubby specimin nearby - and we'll get you a meal and a bed for the night..\"","\n",{"->":".^.^.talking_to_Bossman"},{"#f":1}],"joinDockers":["^you traipse around following Johan","\n",{"->t->":"talking_to_Johan"},{"->":".^.^.quayside"},{"#f":1}],"talking_to_Bossman":[["ev","str","^grab a nearby barrel","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^grab a nearby sack","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^negotiate..","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^nah..","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":["\n","^You nod, grab the nearest barrel, heft it on your shoulder and follow Johan","\n",{"->":".^.^.^.^.joinDockers"},{"#f":5}],"c-1":["\n","^You nod, grab the nearest sack, heft it on your shoulder and follow Johan","\n",{"->":".^.^.^.^.joinDockers"},{"#f":5}],"c-2":["\n","^'Hey, just because i'm new in town doesn't mean i'm a mug - I'll need cash too..'","\n",["ev","str","^The heavy set man looks you in the eye","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ Listen son. You want to talk money? Thats what we make when the work gets done. If you know how to work you might get to see some of it.. ",{"->":".^.^.^.^.^"},"\n",{"#f":5}]}],{"#f":5}],"c-3":["\n","^This isn't for you. You came here to find something more than carrying heavy things. You shake your head and step past the man and onto the quayside. ",{"->":".^.^.^.^.quayside"},"\n",{"#f":5}]}],{"#f":1}],"approachedByGrolsh":[["^dodgy dutch accent blahblah","\n","ev","str","^piss off","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":".^.^.^.^.quayside"},"\n",{"#f":5}]}],{"#f":1}],"quayside":["^you get used to life on the docks","\n",{"->t->":"talking_to_lads"},"ev","void","/ev","->->",{"#f":1}],"#f":1}],"talking_to_Johan":[["ev","str","^Talk about the weather","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Talk about the children","/str","/ev",{"*":".^.c-1","flg":20},{"*":".^.c-2","flg":8},{"c-0":["^ ",{"->":"chat_weather"},"\n",{"#f":5}],"c-1":["^ ",{"->":"chat_children"},"\n",{"#f":5}],"c-2":["ev","void","/ev","->->","\n",{"#f":5}]}],{"#f":1}],"chat_weather":[[["^weather nice? you ask","\n","^'whatever; twat.'","\n",{"->":"talking_to_Johan"},{"#f":5,"#n":"g-0"}],null],{"#f":1}],"chat_children":[[["^got kids","\n","^'no'","\n",{"->":"talking_to_Johan"},{"#f":5,"#n":"g-0"}],null],{"#f":1}],"talking_to_lads":[["^'blah'","\n","ev","str","^blahblah","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^blah. blahblah","/str","/ev",{"*":".^.c-1","flg":20},{"*":".^.c-2","flg":8},{"c-0":["^ ",{"->":".^.^.^.blah"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.blahblahblah"},"\n",{"#f":5}],"c-2":["ev","void","/ev","->->","\n",{"#f":5}]}],{"blah":[[["^'blahblah', you reply","\n",{"->":".^.^.^.^"},{"#f":5,"#n":"g-0"}],null],{"#f":1}],"blahblahblah":[[["^'blah. blahblah', you observe, sagely.","\n",{"->":".^.^.^.^"},{"#f":5,"#n":"g-0"}],null],{"#f":1}],"#f":1}],"Chapter_3":[["ev",3,"str","^It's just business","/str",{"f()":"chapter"},"out","/ev","\n","^An introduction to the politics of Nuln","\n","^the group your with sets up a thing against another group; turns out to be a trap.","\n","^you lose but..","\n",["ev",{"^->":"Chapter_3.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^...hey. this is nuln.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Chapter_3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n","^it's nothing personal","\n","ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"Chapter_4":["ev",4,"str","^Times, they are a changing","/str",{"f()":"chapter"},"out","/ev","\n","^Revolutionary talk amongst whichever group you're in.","\n",{"->":"revolutionary_talk"},{"#f":1}],"revolutionary_talk":[["ev","str","^do something radical","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^hmm i don't know","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"radical"},"\n",{"#f":5}],"c-1":["^ ","ev","void","/ev","->->","\n",{"#f":5}]}],{"#f":1}],"radical":["^you go on a radical adventure, what fun","\n","ev","void","/ev","->->",{"#f":1}],"Chapter_5":["ev",5,"str","^The Great Game","/str",{"f()":"chapter"},"out","/ev","\n","^The Countess announces the creation of The Grand Council to stave off revolutionary sentiment.","\n","^People are appointed.","\n","^Talk of the town.","\n","^Group will have some interests immediately - some operation will be called in.. whoever the gang is affiliated with will want to take a bite out of someone with opposed affiliations","\n","^The game is on.","\n","ev","void","/ev","->->",{"#f":1}],"Chapter_6":["ev",6,"str","^Raising the Stakes","/str",{"f()":"chapter"},"out","/ev","\n","^A big player begins a big plan. Somewhere down the chain this causes another organisation to make a move on your group.","\n","^How well do you handle it, what do you find out, what do you do?","\n","ev","void","/ev","->->",{"#f":1}],"setCharacterOutlookToGloomy":["ev",-1,"/ev",{"VAR=":"YOUR_OUTLOOK","re":true},{"#f":1}],"setCharacterOutlookToBalanced":["ev",0,"/ev",{"VAR=":"YOUR_OUTLOOK","re":true},{"#f":1}],"setCharacterOutlookToPositive":["ev",1,"/ev",{"VAR=":"YOUR_OUTLOOK","re":true},{"#f":1}],"setCharacterIsLoner":["ev",1,"/ev",{"VAR=":"YOUR_GREGARIOUSNESS","re":true},{"#f":1}],"loner":["ev",{"VAR?":"YOUR_GREGARIOUSNESS"},1,"==","/ev","~ret",{"#f":1}],"setCharacterIsGregarious":["ev",2,"/ev",{"VAR=":"YOUR_GREGARIOUSNESS","re":true},{"#f":1}],"global decl":["ev",0,{"VAR=":"YOUR_OUTLOOK"},1,{"VAR=":"YOUR_GREGARIOUSNESS"},"/ev","end",null],"#f":1}],"listDefs":{}};