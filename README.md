# Cypher

For any future site maintainers:

Use `deploy.sh` to copy your updates to the correct directory on the department
machines.

The current year's site can occupy the top-level directory of this repo.
Move any pre-existing files into a directory named for the year of those files' event.

Keep `previous.html` in place.
Edit it as much as needed, but keep it where it is.
Do not copy it into yearly archive directories.
As yearly editions of the page get shelved in their own directories,
update that year's page's "previous" link to point to the single `previous.html`,
and edit that year's link in `previous.html`.

This means all links on your page should be relative, so that they can continue
to function once copied to a separate directory.

## PapaParse
We include `papaparse.min.js` to allow the hackathon team the ability to easily update
the schedule without input from the webmaster.

It requires you to setup a Google Sheet with a specific format and
publish it to the web. You can then replace the `SCHEDULE` url in `script.js` with
the URL to your new sheet. This URL should be the one you get when you select Share >> Publish to the Web >> CSV format. 

The required format is very simple, just columns for `Date`, `Time`, `Title`, `Location`, and
`Details`. `Date` should be either `Friday`, `Saturday` or `Sunday`, but the other
fields are freeform text. Make sure to order the events in the order they should
appear on the schedule.

Then just give the Cypher Chair edit access, and they can setup the schedule
themselves.
