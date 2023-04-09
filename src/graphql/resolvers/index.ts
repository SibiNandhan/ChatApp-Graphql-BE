import userResolvers from './user'
import { mergeObjects } from '../../../factoryFunction/objectFunction';

const resolvers=mergeObjects(userResolvers);

export default resolvers;