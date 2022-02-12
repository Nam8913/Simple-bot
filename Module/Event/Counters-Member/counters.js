module.exports ={
  name: 'ready',
  once: true,
  execute(client){
    const guild = client.guilds.cache.get("938170955337986048");
    setInterval(()=>{
    const memberCount = guild.memberCount;
    const channel = client.channels.cache.get('941870464115023912');
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log("Member was update")
    },1000000)
  }
}
 