import glob from "glob";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const components = glob.sync("lib/**/component.js");

const output = components.map(component => {
  const parts = component.split("/");
  return {
    input: component,
    output: {
      dir: `dist/${parts[1]}`,
      format: "cjs",
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: "/node_modules/"
      }),
      resolve(),
      commonjs()
    ]
  };
});

export default output;
