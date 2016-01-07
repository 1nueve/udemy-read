var app = require('express')(),
	fs = require('fs'),
	mkdirp = require('mkdirp'),
	JSONFile = JSON.parse(fs.readFileSync('api-course-description-call.json', 'utf8')),
	server = require('http').createServer(app);

console.log('udemy-read Started!');

var jsonItems = JSONFile.results,
	chapterCounter = 0,
	COURSE_DIRECTORY = 'COURSE/',
	SOURCE_DIRECTORY = 'downloaded-videos/',
	VIDEO_DOWNLOADED_VIDEO = 'WebHD.mp4',
	chapter,
	item,
	asset,
	id_folder,
	SOURCE,
	DESTINATION;

for (var i = 0; i <jsonItems.length; i++) {
	item = jsonItems[i];

	if (item._class != undefined) {
		if (item._class == 'chapter') {
			chapterCounter++;

			if (chapterCounter < 10)
				chapter = COURSE_DIRECTORY + '0' + chapterCounter + ' - ' + item.title;
			else
				chapter = COURSE_DIRECTORY + chapterCounter + ' - ' + item.title;
			
			mkdirp(chapter);
		} else if (item._class == 'lecture') {
			if (item.asset != undefined) {
				asset = item.asset;

				if (asset._class == 'asset' && asset.asset_type == 'Video') {
					id_folder  = asset.id;

					SOURCE = SOURCE_DIRECTORY + id_folder + '/' + VIDEO_DOWNLOADED_VIDEO;
					DESTINATION = chapter + '/' + asset.title;
					fs.rename(SOURCE, DESTINATION); 
			}
		}
	}
	if (i >= jsonItems.length-1)
		console.log("Process finished!");
	}
}

server.listen(3000);