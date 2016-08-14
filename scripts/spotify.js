const https = require('https');





    https.get('https://api.spotify.com/v1/search?q=' + "crazy train" + '&type=track', function(response) {

        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);

            //console.log(parsed);

            if (parsed.tracks.items[0] == undefined) {
              console.log("Not found");
            }
            //console.log(parsed.artists.items[0].external_urls.spotify);
            else {
              console.log(parsed.tracks.items[0].external_urls.spotify);
            }
        });
    });
