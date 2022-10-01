import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/http-adapters/axios.adapter';


import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {


  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,

  ) { }

  async executeSeed() {

    await this.pokemonModel.deleteMany({});

    const url = `https://pokeapi.co/api/v2/pokemon?limit=1000`;
    const data = await this.http.get<PokeResponse>(`${url}`);

    // const insertPromisesArray = [];
    const pokemonToInsert: { name: string, no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2]

      // insertPromisesArray.push(
      //   this.pokemonModel.create({ name, no })
      // );

      pokemonToInsert.push({ name, no });

    });

    // await Promise.all(insertPromisesArray);
    await this.pokemonModel.insertMany(pokemonToInsert);

    return "Seed executed";
  }

}
