import { rest } from 'msw'

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'foo',
        },
        {
          id: 2,
          name: 'bar',
        }
      ]),
    )
  }),
]
