# CEE-Buzz LG Smart TV App Notes

This repository contains a minimal LG webOS web app wrapper for CEE-Buzz.

## Core API endpoints (video id `1374956`)

These endpoints provide the key video metadata used by the app:

- `https://cee.buzz/api/android/checkVideoParentalLevel/id/1374956`
- `https://cee.buzz/api/android/relatedVideos/id/1374956/kind/1/level/0`
- `https://cee.buzz/api/android/allVideoInfo/id/1374956`
- `https://cee.buzz/api/android/skippingDurations/id/1374956`
- `https://cee.buzz/api/android/transcoddedFiles/id/1374956`
- `https://cee.buzz/api/android/video_thumbnails/video_id/1374956`
- `https://cee.buzz/api/android/videoSeason/id/1374956`
- `https://cee.buzz/api/android/videoSeasonNumber/id/1374956`
- `https://cee.buzz/api/android/subCategories?lang=ar`
- `https://cee.buzz/api/android/mainCategories?lang=ar`

## LG webOS implementation note

The current app entry point (`index.html`) redirects to `https://cee.buzz/home`, while the endpoints above can be used by a native TV UI or future in-app client logic.
