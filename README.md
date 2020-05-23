# Rianimazione-Gantt

A gantt created with Google Charts for the reanimation ward of an italian hospital.
I tried to use online gantt sites, but no-one are hour-based. I had to work hard to create something...

## Technical Workarounds

I needed to overwrite some Google Charts features like sample colors and adding lines.
For this reason I used MutationObserver to override google redraws.
