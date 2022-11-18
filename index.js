async getS3CityDetails(@Query() query: cityDetailsDto, response) {
    try {

      // const rStreamFile = createReadStream(join(process.cwd(), 'file.geojson'));
      // rStreamFile.on('data', (chunkData) => {
      //   response.write(chunkData);
      // });
      // rStreamFile.on('end', () => {
      //   response.end();
      // });
      // const fileName = 'z.geojson';
      // const fileType = 'geojson';

      // rStreamFile.pipe(response);
      const data = {
        bucket: 'geojson.data.delivery/1',
        fileName: 'z.geojson',
      };
      const { Body }: any = await getFile(data);
      const file = Readable.from(Body);
      response.writeHead(200, {
        'Content-Disposition': `attachment; filename="z.geojson"`,
        'Content-Type': 'geojson',
      });
      return file.pipe(response);
    } catch (error) {
      console.log('ERROR while getS3CityDetails()===>', error);
      throw error;
    }
  }
