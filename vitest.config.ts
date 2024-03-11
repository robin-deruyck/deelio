import {defineConfig} from 'vitest/config'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@/*': path.resolve(__dirname, './src')
		}
	},
	test: {
		globals: true,
		include: ['src/**/*.test.ts'],
		reporters: ['default', 'html'],
		outputFile: './test-result/test-report.html',
		coverage: {
			reporter: ['html'],
			include: [
				'src/**/lib/**/**.ts',
			],
			exclude: [
				'src/**/lib/*.d.ts',
				'src/**/lib/types.ts'
			]
		}
	}
})