import {Context} from "koa";
import {getManager} from "typeorm";
import {Post} from "../entity/Post";

/**
 * Loads post by a given id.
 */
export async function postGetByIdAction(context: Context) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Post);

    // load a post by a given post id
    const post = await postRepository.findOne((context as any).params.id);

    // if post was not found return 404 to the client
    if (!post) {
        context.status = 404;
        return;
    }

    // return loaded post
    context.body = post;
}