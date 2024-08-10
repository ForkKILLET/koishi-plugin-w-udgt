import { Context, Schema, h } from 'koishi'

export const name = 'w-udgt'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
    ctx.command(h.escape('_<'))
        .action(() => '>_<')
}
