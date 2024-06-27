docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testovyjj_proekt/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testovyjj_proekt/app ../..
