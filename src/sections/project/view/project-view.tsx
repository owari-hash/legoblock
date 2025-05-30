import { _projectHome } from 'src/_mock/_project';
import HomeNewStart from 'src/sections/_home/home-new-start';

export default function ProjectView() {
  return <HomeNewStart projects={_projectHome} />;
}
