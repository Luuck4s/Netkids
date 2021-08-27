export class Film {
  id!: string
  name!: String
  video!: String
  image!: String
  duration!: Number
  description!: String
  categories!: [
    {
      id: Number,
      name: String
    }
  ]
}
