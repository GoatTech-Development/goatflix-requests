yarn-clean:
  yarn cache clean && rm -rf node_modules yarn.lock

install:
  yarn install

build-image:
  docker build --platform linux/amd64 --build-arg COMMIT_TAG=$(git rev-parse --short HEAD) -t goattech-development/goatflix-requests:latest .

build-testing-image:
  docker build --platform linux/amd64 --build-arg COMMIT_TAG=$(git rev-parse --short HEAD) -t goattech-development/goatflix-requests-testing:latest .
