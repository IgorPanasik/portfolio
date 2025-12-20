import path from 'path';
import { Configuration } from 'webpack';
import { IBuildOptions } from './types/types';

export const buildResolvers = (
	options: IBuildOptions,
): Configuration['resolve'] => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@': path.resolve(process.cwd(), 'src'),
		},
	};
};
