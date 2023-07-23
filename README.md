# Highlights from the Metropolitan Museum
Flatiron Front End Phase 1 Project

## Introduction
This MVP is a basic app for looking at a series of 54 masterpieces from the Metropolitan Museum of Art through their public API. This app takes the images from the API and re-sizes them on this single web page.

## Description
The HTML is boilerplate HTML with a few basic adjustments to accomodate the information coming from the API, as it is manipulated by JavaScript. At the top of the page, beneath the title, I have a search bar with the placeholder text 'seek' in it and a search button to the right. To this, I attached an event listener which creates a pop-up when one clicks inside the bar itself. 

The JavaScript contains 2 fetches, 3 event listeners, and a forEach. The 2 fetches bring specific information related to images from the Metropolitan Museum's public API. This is only a subset of the images on that API - only 54. The original goal was to specify a search for Impressionism. Since this initial search brought up various other works from other eras, the title 'highlights from the Metropolitan Museum' seems more approriate. The forEach targets the object ID (basically the part of the API containing the data for each specific image) and extracts the primary image. I added an if..else here to re-size the images to better render on my page. 

I cleaned up the various elements with css. This helped in keeping the API images from rendering below (and not behind) my title and search bar at the top of the page. I created divs with the classes 'topOfPage' and 'midPage' with the latter holding the card container with the API images.





## External Sites:

Metropolitan Museum Public API: https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=impressionism

Project Rubric: https://my.learn.co/courses/649/assignments/32803?module_item_id=82993
Project Guidelines: https://my.learn.co/courses/649/pages/phase-1-project-guidelines?module_item_id=82990

