=== function chapter(number, title) ===
\-- Chapter { print_num_capitalised(number) } --  # CLASS: Chapter
\- {title} -                                      # CLASS: Chapter

=== function print_num(x) ===
{
    - x >= 1000:
        {print_num(x / 1000)} thousand { x mod 1000 > 0:{print_num(x mod 1000)}}
    - x >= 100:
        {print_num(x / 100)} hundred { x mod 100 > 0:and {print_num(x mod 100)}}
    - x == 0:
        zero
    - else:
        { x >= 20:
            { x / 10:
                - 2: twenty
                - 3: thirty
                - 4: forty
                - 5: fifty
                - 6: sixty
                - 7: seventy
                - 8: eighty
                - 9: ninety
            }
            { x mod 10 > 0:<>-<>}
        }
        { x < 10 || x > 20:
            { x mod 10:
                - 1: one
                - 2: two
                - 3: three
                - 4: four
                - 5: five
                - 6: six
                - 7: seven
                - 8: eight
                - 9: nine
            }
        - else:
            { x:
                - 10: ten
                - 11: eleven
                - 12: twelve
                - 13: thirteen
                - 14: fourteen
                - 15: fifteen
                - 16: sixteen
                - 17: seventeen
                - 18: eighteen
                - 19: nineteen
            }
        }
}

=== function print_num_capitalised(x) ===
{
    - x >= 1000:
        {print_num(x / 1000)} thousand { x mod 1000 > 0:{print_num(x mod 1000)}}
    - x >= 100:
        {print_num(x / 100)} hundred { x mod 100 > 0:and {print_num(x mod 100)}}
    - x == 0:
        zero
    - else:
        { x >= 20:
            { x / 10:
                - 2: Twenty
                - 3: Thirty
                - 4: Forty
                - 5: Fifty
                - 6: Sixty
                - 7: Seventy
                - 8: Eighty
                - 9: Ninety
            }
            { x mod 10 > 0:<>-<>}
        }
        { x < 10 || x > 20:
            { x mod 10:
                - 1: One
                - 2: Two
                - 3: Three
                - 4: Four
                - 5: Five
                - 6: Six
                - 7: Seven
                - 8: Eight
                - 9: Nine
            }
        - else:
            { x:
                - 10: Ten
                - 11: Eleven
                - 12: Twelve
                - 13: Thirteen
                - 14: Fourteen
                - 15: Fifteen
                - 16: Sixteen
                - 17: Seventeen
                - 18: Eighteen
                - 19: Nineteen
            }
        }
}
