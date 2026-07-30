import { Controller, Get, Query, Res } from '@nestjs/common';
import type { Response } from 'express';
import axios from 'axios';

@Controller('players-image')
export class PlayersImageController {

  @Get()
  async getImage(
    @Query('url') url: string,
    @Res() res: Response,
  ) {

    if (!url) {
      return res.status(400).send('Falta la URL');
    }

    try {

      const response = await axios.get(url, {
        responseType: 'arraybuffer',
      });

      res.set({
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      });

      return res.send(response.data);

    } catch (error) {

      return res.status(404).send('Imagen no encontrada');

    }
  }
}