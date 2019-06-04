# Project Name

> Carousel Image slider.

## Related Projects

  - https://github.com/fec-team-2/Images-Carousel
  - https://github.com/fec-team-2/kart-and-info
  - https://github.com/fec-team-2/other-items
  - https://github.com/fec-team-2/reviews

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## CRUD API
- GET /product-images (retrieves all images)
- GET /product-images/:productid (retrieves all images related to product with specified id)
- POST /product-images/:productid (posts an images to the set of images at the specified product id)
- PUT /product-images/:productid/:imageid (updates the image at the specified imageid for the specified product id)
- DELETE /product-images/:productid (delete all images for the specified product id)
- DELETE /product-images/:productid/:imageid (delete the image at the specified imageid for the specified product id)

## Usage

> In order to implement this module you will need to create your own Amazon S3 Bucket and upload at least 100 images to the bucket.
For finding 100 images that are related to the product built I used a Google Chrome extension called ImageAssistant Batch Downloader which allows you to search for images in Google and download batches of 50 images at once.

- See the package.json file
> npm seed
> npm react-dev
> npm start


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

### Installing Dependencies
From within the root directory:
> npm install


