CONST OUTLOOK_GLOOMY = -1
CONST OUTLOOK_BALLANCED = 0
CONST OUTLOOK_POSITIVE = 1
VAR YOUR_OUTLOOK = OUTLOOK_BALLANCED

=== function setCharacterOutlookToGloomy ===
~ YOUR_OUTLOOK = OUTLOOK_GLOOMY

=== function setCharacterOutlookToBalanced ===
~ YOUR_OUTLOOK = OUTLOOK_BALLANCED

=== function setCharacterOutlookToPositive ===
~ YOUR_OUTLOOK = OUTLOOK_POSITIVE

CONST LONER = 1
CONST GREGARIOUS = 2
VAR YOUR_GREGARIOUSNESS = LONER

=== function setCharacterIsLoner ===
~ YOUR_GREGARIOUSNESS = LONER

=== function loner ===
    ~ return YOUR_GREGARIOUSNESS == LONER

=== function setCharacterIsGregarious ===
~ YOUR_GREGARIOUSNESS = GREGARIOUS

