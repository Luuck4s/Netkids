export class Film {
  id!: string
  name!: String
  video!: string
  image!: String
  duration!: Number
  description!: String
  categoriesString?: any
  categories!: [
    {
      id: Number,
      name: String
    }
  ]
}
