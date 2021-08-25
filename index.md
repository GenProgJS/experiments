## GenProgJS: a Baseline System for Test-based Automated Repair of JavaScript Programs 
GenProgJS was evaluated on the [BugsJS dataset](https://bugsjs.github.io). The random nature of the genetic algorithm makes it harder to validate and reproduce our results, thus, for the sake of generalization our experiments were carried out on 5 independent runs. On this page we gathered and systematized the data for all the generated patches and display them.


## Online appendix components
 - [GenProgJS homepage](https://genprogjs.github.io/GenProgJS/)
 - [Docker environment](https://genprogjs.github.io/GenProgJS-Docker/)
 - [Experiment data](https://genprogjs.github.io/experiments/) (this page)


## Data
In the table below one can find the experiment data for all the five independent runs. **We created diffs for every generated patch and created an html file for each run (see [column 3 - Diffs](./1/index.html))**. In the data folder (column 2) there is a subfolder for each bug following the `[project]_[bugNumber]` naming convention (eg. the first bug in the Eslint project would have the folder name `eslint_1`). Inside of these subfolders one can find 3 types of files:
 - `general_info.log`: log messages containing general information about the fitness values, running time and population throughout the search process.
 - `[project]_[bugNumber]_[index].info`: contains detailed information about the `[index]`th generated patch. This information includes the generation in which the patch was generated, the elapsed time, test execution information and the list of applied operators (and their corresponding modifications). 
 - `[project]_[bugNumber]_[index].js`: the patched version of the original program.

| Run | Data folder | Diffs | Avg. runtime (30 gens.) | Avg. #candidate | #operators |
|---|---|---|---|---|---|
| #1 | [GenProgJS/experiments/#1](https://github.com/GenProgJS/experiments/tree/master/%231) | [#1/](./1/index.html) | 19.54 h | 5.92 | 622 |
| #2 | [GenProgJS/experiments/#2](https://github.com/GenProgJS/experiments/tree/master/%232) | [#2/](./2/index.html) | 16.32 h | 6.9 | 764 |
| #3 | [GenProgJS/experiments/#3](https://github.com/GenProgJS/experiments/tree/master/%233) | [#3/](./3/index.html) | 16.34 h | 6 | 434 |
| #4 | [GenProgJS/experiments/#4](https://github.com/GenProgJS/experiments/tree/master/%234) | [#4/](./4/index.html) | 14.12 h | 3.9 | 453 |
| #5 | [GenProgJS/experiments/#5](https://github.com/GenProgJS/experiments/tree/master/%235) | [#5/](./5/index.html) | 17.39 h | 9 | 954 |


