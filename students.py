import io
from pathlib import Path
from os import path

students = [
    ["LOGAN", "ARGOUSE"],
    ["MARION", "BARTHE"],
    ["ENZO", "BASSOT"],
    ["LILOU", "BERNARD"],
    ["ELIES", "BILLOTTA"],
    ["LOU", "BONAFE"],
    ["MAILIS", "BONHOMME"],
    ["CORALIE", "BONNAND"],
    ["LILA", "CAPPELIE"],
    ["LENA", "CHREA"],
    ["ENORA", "COURON"],
    ["ELIOTT", "DEVAUX"],
    ["MAELY", "DOLLE"],
    ["GUILHEM", "DUVAL"],
    ["ADELIE", "FERRE"],
    ["TANYA", "FRANCOIS"],
    ["NINA", "GAILLARD"],
    ["THOMAS", "GARNIER"],
    ["VALENTIN", "GAURIAT"],
    ["TANCREDE", "GORAND"],
    ["MAUREEN", "GRANDIDIER"],
    ["NOLWENN", "GRASS"],
    ["SARA", "GRASS"],
    ["LAURA", "GRELL-REGEN"],
    ["LUCIE", "GUERIN"],
    ["BAPTISTE", "JOUIN"],
    ["MARIANNE", "KERCKHOVE"],
    ["MELODIE", "KOUY"],
    ["SARA", "LAFLEUR"],
    ["HEIDI", "LAGARDE"],
    ["CAMILLE", "LANGLAIS"],
    ["SEGOLENE", "LAZARUS"],
    ["MATTHIEU", "MECHINEAU"],
    ["TITOUAN", "MICHON"],
    ["ALEXANDRE", "MIRALLES"],
    ["ROMANE", "MORICE"],
    ["MATTEO", "MOULAT"],
    ["ZACHARIE", "PAIN"],
    ["CORENTIN", "PAK"],
    ["MATHEO", "POUGALAN"],
    ["LEO", "SALAUN"],
    ["FLORIAN", "TACOU"],
    ["SALOME", "TEYSSIER"],
    ["ERWAN", "THIBAUD"],
    ["LEA", "TOUCHARD"],
    ["MAXIME", "VERNA"],
]

for [prenom, nom] in students:
    name = f"{prenom.title()} {nom[0]}"
    filepath = path.join(Path(__file__).parent, "content/evaluation", f"{name}.md")

    string = f"""import StudentsDropdown from "@site/components/evaluation/StudentsDropdown"
import LessonLink from "@site/components/LessonLink"

<StudentsDropdown/>

<br/>

# Evaluation

:::tip CAPTIONS
☁️ > I haven't seen enough of your code yet to tell if you are doing well.<br/>
🌞 > You are doing great.<br/>
🌈 > You are doing amazing.<br/>
❌ > I am not happy and you should prioritize working on that point.
:::

## Tools (3 pts.)

➕ *What you **should** do:*

- ☁️ Follow [the good practices of the Git lesson](/lessons/git#good-practices)
- ☁️ Have a [.clang-format](/lessons/formatting-tool/) file, and apply it to your codebase
- ☁️ Have a [.clang-tidy](/lessons/static-analysers/) file, and fix the problems it shows you, or ask the teacher if you don't understand what the warning means or don't know how to fix it.

➖ *What you **shouldn't** do:*

- ☁️ Committing unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- ☁️ Making no commits until near the end of the semester

## Clean Code (12 pts.)

➕ *What you **should** do:*

- ☁️ Write many small functions (<LessonLink slug="write-small-functions"/>)
- ☁️ Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- ☁️ Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>

➖ *What you **shouldn't** do:*

- ☁️ Hard to understand or misleading names (<LessonLink slug="naming"/>)
- ☁️ Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- ☁️ Overly complicated code
- ☁️ Global variables

## C++ Code Quality (3 pts.)

➕ *What you **should** do:*

- ☁️ Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)
- ☁️ Use destructors when things need to be destroyed at the end.
- ☁️ Use `const` when appropriate (<LessonLink slug="const"/>)
- ☁️ Use lambdas when appropriate (<LessonLink slug="lambda"/>)

➖ *What you **shouldn't** do:*

- ☁️ Using `new` instead of a stack allocation or a smart pointer or a standard container (`std::vector`)
- ☁️ Forgetting `#pragma once` in your headers
- ☁️ Using `1` and `0` instead of `true` and `false` for your booleans

## Investment (4 pts.)

➕ *What you **should** do:*

- ☁️ Ask questions and participate in class
- ☁️ Take my feedback into account, improve your old code if need be
- ☁️ Extend your project with additional features
"""
    with io.open(filepath, "w", encoding="utf8") as file:
        file.write(string)
