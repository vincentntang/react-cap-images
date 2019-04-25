## Image background

Images were downloaded from https://www.freeiconspng.com/downloadimg/39078, and compressed using morgify and imagemagick. Then stored in Airtable to be used as an API endpoint

Feel free to see what the image data set looks like on Airtable

https://airtable.com/shrjpYuKHeaIHwkwM

## Data returned by API

GET request for all 18 images

```
$ curl https://api.airtable.com/v0/appjyRSLnk3amftj3/Table%201 \
-H "Authorization: Bearer {{API-KEY}}
```

```json
{
    "records": [
        {
            "id": "rec2bMOZAtgNMKXVt",
            "fields": {
                "Name": 6,
                "Attachments": [
                    {
                        "id": "attgCBfo1PtO9ZNLZ",
                        "url": "https://dl.airtable.com/.attachments/f85a86a508f210b80dc5bdd1dbcc2d45/722a2cd8/car-png-39066.png",
                        "filename": "car-png-39066.png",
                        "size": 114291,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/353d15cf853818e462a546aa046c7933/9b765732",
                                "width": 68,
                                "height": 36
                            },
                            "large": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/a23d5d76dc86653c382af14990220cb5/945c050b",
                                "width": 500,
                                "height": 264
                            },
                            "full": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/1f450a45a97922c16d258c21b556d757/59638942",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ]
            },
            "createdTime": "2019-04-25T03:45:52.000Z"
        },
        {
            "id": "recGM08iimzQerOaq",
            "fields": {
                "Name": 17,
                "Attachments": [
                    {
                        "id": "att250VTLPyDUfRod",
                        "url": "https://dl.airtable.com/.attachments/626538153f055f537dc9635f6b035940/46afd5ec/car-png-39077.png",
                        "filename": "car-png-39077.png",
                        "size": 119619,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/35d30fcd7759f1bc9ade464e7f13efeb/efd48e95",
                                "width": 72,
                                "height": 36
                            },
                            "large": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/1aefb723000a5b1cdf4e16fbb00f2382/5c7f3823",
                                "width": 500,
                                "height": 249
                            },
                            "full": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/e71f2afc6113bc2a2dc17dfb09aa58e4/834f5d25",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ]
            },
            "createdTime": "2019-04-25T03:48:08.000Z"
        },
        // etc for all 16 images
    ]
}
```